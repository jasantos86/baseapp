import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../../../menus/main-menu.service'

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  menuItems = [];

  constructor(private mainmenu: MainMenuService) {
    this.menuItems = mainmenu.menuItems;
   }

  ngOnInit() {
  }

}
