import { RouterModule } from '@angular/router';
import { CoreShellComponent } from './core-shell/core-shell.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreHeaderComponent } from './header/header.component';
import { CoreModule } from '../../core.module';
import { SharedModule } from '../../../shared/shared.module'
import { MainNavComponent } from './main-nav/main-nav.component'
import { SideNavComponent } from './side-nav/side-nav.component'
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';

@NgModule({
  declarations: [
    CoreShellComponent,
    CoreHeaderComponent,
    MainNavComponent,
    SideNavComponent,
    ProfileMenuComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    MatSidenavModule,
    RouterModule,
  ],
  exports: [ CoreShellComponent ]
})
export class ShellComponentsModule { }
