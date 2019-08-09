import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../side-nav/side-nav.service';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class CoreHeaderComponent implements OnInit {

  constructor(public sidebarservice: SidebarService) { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }

}
