import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { ProductsState } from './../../store/products.state';
import { EditProductAction } from './../../store/products.actions';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/firebase';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'prodmgr-list',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductListComponent implements OnInit {

  @Select(ProductsState.products) rows$: Observable<Product[]>;

  @Dispatch()
  public editProduct = (id:string) => new EditProductAction(id);

  loadingIndicator: boolean = false;
  selected = [];

  constructor(private prodSvc:ProductsService, private currencyPipe:CurrencyPipe, private state:ProductsState) { }

  ngOnInit() {
    //this.rows$ = this.prodSvc.products$;
  }

  editRow(id) {
    this.editProduct(id);
  }

  deleteRow(id){

  }
}
