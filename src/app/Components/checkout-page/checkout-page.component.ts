import { Component, OnInit } from '@angular/core';
import { IProductDetails } from 'src/app/Models/products-interface';
import { ProductsStore } from '../../Store/ProductsStore/products.store';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  public product: IProductDetails;
  constructor(
    private _store: ProductsStore
  ) {}

  ngOnInit() {
    this._store.state$.subscribe(state => console.log(state.products));
  }
}
