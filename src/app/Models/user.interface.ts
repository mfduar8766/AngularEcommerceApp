import { IProductDetails } from './products-interface';

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  purchasedProducts: IProductDetails[];
}
