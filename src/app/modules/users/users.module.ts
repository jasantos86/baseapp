import { CoreModule } from 'src/app/core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserManagerComponent } from './components/user-manager/user-manager.component';
import { LocalShellComponent } from './shell/shell.component';
import { ShellComponentsModule } from 'src/app/core/components/shell/shell.module';

@NgModule({
  declarations: [UserManagerComponent, LocalShellComponent],
  imports: [
    CommonModule,
    CoreModule,
    UsersRoutingModule,
    ShellComponentsModule,
  ],
  exports: [
  ]
})
export class UsersModule { }
