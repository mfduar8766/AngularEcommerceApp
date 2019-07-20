import { Injectable } from '@angular/core';
import { Store } from './store';
import { UserState } from './user.state';
import { IUser } from '../../Models/user.interface';

@Injectable()
export class ProductsStore extends Store<UserState> {
  constructor() {
    super(new UserState());
  }

  setUser(user: IUser): void {
    this.setState({
      ...this.state,
      user: { ...this.state.user, user }
    });
  }
}
