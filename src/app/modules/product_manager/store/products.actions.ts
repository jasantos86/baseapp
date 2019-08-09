import { Product } from 'src/app/core/models/firebase';

export class AddProductAction {
  public static readonly type = '[Products] Add item';
  constructor(public payload: Product) { }
}

export class EditProductAction {
  public static readonly type = '[Products] Edit item';
  constructor(public payload: string) { }
}

