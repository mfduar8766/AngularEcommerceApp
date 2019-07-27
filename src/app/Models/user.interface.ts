import { IProductDetails } from './products-interface';

export interface IUser {
  [x: string]: any;
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  purchasedProducts: IProductDetails[];
}
