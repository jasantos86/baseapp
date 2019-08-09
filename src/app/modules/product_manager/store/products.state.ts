import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductsService } from './../services/products.service';
import { Product } from 'src/app/core/models/firebase';
import { State, Action, Selector, StateContext, NgxsOnInit} from '@ngxs/store';
import { AddProductAction, EditProductAction } from './products.actions';

export interface ProductsStateModel {
  items: Product[];
  selected?: Product;
}

@State<ProductsStateModel>({
  name: 'products',
  defaults: {
    items: []
  }
})
export class ProductsState implements NgxsOnInit {

  constructor(private prodSvc: ProductsService) {}

  @Selector()
  public static products(state: ProductsStateModel) {
    return state.items;
  }

  ngxsOnInit({ setState }: StateContext<ProductsStateModel>) {
    this.prodSvc.products$.subscribe(prods => {
      setState({
        items: prods,
      });
    });

  }

  @Action(AddProductAction)
  public add(ctx: StateContext<ProductsStateModel>, { payload }: AddProductAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
  @Action(EditProductAction)
  public edit(ctx: StateContext<ProductsStateModel>, { payload }: EditProductAction) {
    const stateModel = ctx.getState();
    const product = stateModel.items.filter(prod => prod.uid === payload);
    ctx.patchState({selected: product[0]});
  }
}
