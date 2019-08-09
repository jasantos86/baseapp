import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../side-nav/side-nav.service';

@Component({
  selector: 'core-shell',
  templateUrl: './core-shell.component.html',
  styleUrls: ['./core-shell.component.scss']
})
export class CoreShellComponent implements OnInit {

  constructor(public sidebarservice: SidebarService) { }

  ngOnInit() {
  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  setSideBarState(bool:boolean) {
    this.sidebarservice.setSidebarState(bool);
  }

}
