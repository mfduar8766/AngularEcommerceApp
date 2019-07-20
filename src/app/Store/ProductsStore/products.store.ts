import { Injectable } from '@angular/core';
import { Store } from './store';
import { ProductsState } from './products.state';
import { IProductDetails, IProducts } from '../../Models/products-interface';

@Injectable()
export class ProductsStore extends Store<ProductsState> {
  constructor() {
    super(new ProductsState());
  }

  setProducts(product: IProducts[]): void {
    this.setState({
      ...this.state,
      products: [...this.state.products, product]
    });
  }

  addProducts(product: IProductDetails): void {
    this.setState({
      ...this.state,
      products: [...this.state.purchasedProducts, product]
    });
  }
}
