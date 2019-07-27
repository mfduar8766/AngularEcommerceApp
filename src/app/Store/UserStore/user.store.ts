import { Injectable } from '@angular/core';
import { Store } from './store';
import { UserState } from './user.state';
import { IUser } from 'src/app/Models/user.interface';
import { IProductDetails } from 'src/app/Models/products-interface';

@Injectable()
export class UserStore extends Store<UserState> {
  constructor() {
    super(new UserState());
  }

  setUser(user: IUser): void {
    this.setState({
      ...this.state,
      user: user
    });
  }

  setPurchasedProducts(product: IProductDetails): void {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        purchasedProducts: [...this.state.user.purchasedProducts, product]
      }
    });
  }
}
