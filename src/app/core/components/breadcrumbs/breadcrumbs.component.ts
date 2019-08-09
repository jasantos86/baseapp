import { map, mergeMap } from 'rxjs/internal/operators';
import { Component, OnInit, Input } from "@angular/core";
import { Breadcrumb } from "./breadcrumb";
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET, RoutesRecognized } from '@angular/router';
import { BreadcrumbsService } from "./breadcrumbs.service";
import { filter } from "rxjs/operators";

@Component({
  selector: "breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styleUrls: ["./breadcrumbs.component.scss"]
})
export class BreadcrumbsComponent implements OnInit {

  @Input()
  addStyle: string;

  breadcrumb: Breadcrumb[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private bcSvc: BreadcrumbsService
  ) {
    this.breadcrumbData();
  }

  ngOnInit() {
    this.bcSvc.breadcrumbLabels.subscribe(labelData => {
      for (const label in labelData) {
        if (labelData.hasOwnProperty(label)) {
          this.breadcrumb.map(crumb => {
            const labelParams = crumb.label.match(/[^{{]+(?=\}})/g);
            if (labelParams) {
              for (const labelParam of labelParams) {
                if (labelParams.hasOwnProperty(labelParam)) {
                  const dynamicData = labelData[label];
                  if (labelParam === label) {
                    crumb.label = crumb.label.replace(
                      '{{' + labelParam + '}}',
                      dynamicData
                    );
                  }
                }
              }
            }
          });
        }
      }
    });
  }

  breadcrumbData() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      }))
      .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
      .subscribe(route => {

        if (route.snapshot.data.breadcrumb) {
          const breadcrumb = (JSON.parse(JSON.stringify(route.snapshot.data.breadcrumb)));
          breadcrumb.map((crumb) => {
            const urlChunks = crumb.url.split('/');

            for (const chunk of urlChunks) {
              if (chunk.includes(':')) {
                const paramID = chunk.replace(':', '');
                const routerParamID = route.snapshot.params[paramID];
                crumb.url = crumb.url.replace(`:${paramID}`, routerParamID);
              }
            }

            const labelParams = crumb.label.match(/[^{{]+(?=\}})/g);
            if (labelParams) {
              for (const labelParam of labelParams) {
                const routerParamID = route.snapshot.params[labelParam.trim()];
                if (routerParamID) {
                  crumb.label = crumb.label.replace('{{' + labelParam + '}}', routerParamID);
                } else {
                  // crumb.label = crumb.label.replace('{{' + labelParam + '}}', '');
                }
              }
            }

          });
          this.breadcrumb = breadcrumb;
        } else {
          this.breadcrumb = [];
        }
      });
  }


}
