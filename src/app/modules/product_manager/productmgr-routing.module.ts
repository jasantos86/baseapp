import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductManagerPage } from './pages/productmanager-page/productmanager-page.component';
import { ProductEditPage } from './pages/productedit-page/productedit-page.component';
import { LocalShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: LocalShellComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'edit',
        component: ProductEditPage,
        data: {
          title: 'Edit Product',
          breadcrumb: [
            {
              label: 'Home',
              url: '/'
            },
            {
              label: 'Products',
              url: '/products'
            },
            {
              label: 'Edit Product',
              url: ''
            }
          ]
        },
      },
      {
        path: 'list',
        component: ProductManagerPage,
        data: {
          title: 'List',
          breadcrumb: [
            {
              label: 'Home',
              url: '/'
            },
            {
              label: 'Products',
              url: ''
            }
          ]
        },
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductMgrRoutingModule { }
