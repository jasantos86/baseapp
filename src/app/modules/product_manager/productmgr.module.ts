import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxsModule } from '@ngxs/store';
import { ProductsState } from './store/products.state';
import { ShellComponentsModule } from '../../core/components/shell/shell.module';
import { LocalShellComponent } from './shell/shell.component';
import { ProductMgrRoutingModule } from './productmgr-routing.module';
import { ProductListComponent } from './components/productslist/productlist.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProductManagerPage } from './pages/productmanager-page/productmanager-page.component';
import { ProductEditPage } from './pages/productedit-page/productedit-page.component';
import { BreadcrumbsModule } from '../../core/components/breadcrumbs/breadcrumbs.module';

@NgModule({
  declarations: [ProductListComponent, LocalShellComponent, ProductFormComponent, ProductManagerPage, ProductEditPage],
  imports: [
    CommonModule,
    CoreModule,
    ProductMgrRoutingModule,
    ShellComponentsModule,
    SharedModule,
    FormsModule,
    BreadcrumbsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxDatatableModule,
    NgxsModule.forFeature([ProductsState])
  ],
  providers: [
    CurrencyPipe
  ],
  exports: [
    RouterModule
  ]
})
export class ProductMgrModule { }
