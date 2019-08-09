import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagerComponent } from './components/user-manager/user-manager.component';
import { LocalShellComponent } from './shell/shell.component';


const routes: Routes = [
  {
    path: '',
    component: LocalShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'manager',
        pathMatch: 'full'
      },
      {
        path: 'manager',
        component: UserManagerComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
