import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/firebase';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products$: Observable<Product[]>;

  constructor(private db:AngularFirestore) { 
    this.products$ = this.db.collection<Product>('products').valueChanges()
   }

}
