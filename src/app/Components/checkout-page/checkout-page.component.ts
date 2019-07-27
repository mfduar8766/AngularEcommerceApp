import { Component, OnInit } from '@angular/core';
import { IProductDetails } from 'src/app/Models/products-interface';
import { UserStore } from '../../Store/UserStore/user.store';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  public product: IProductDetails;
  constructor(
    private _store: UserStore
  ) {}

  ngOnInit() {
    this._store.state$.subscribe(state => console.log(state.user.purchasedProducts));
  }
}
