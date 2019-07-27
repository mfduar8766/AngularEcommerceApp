import { IUser } from 'src/app/Models/user.interface';

export class UserState {
  public user: IUser = {
    id: null,
    name: null,
    email: null,
    password: null,
    avatar: null,
    purchasedProducts: [],
  };
}
