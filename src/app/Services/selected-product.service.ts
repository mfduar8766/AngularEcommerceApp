import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProductDetails } from '../Models/products-interface';

@Injectable({
  providedIn: 'root'
})
export class SelectedProductService {
  private selectedProductSource = new Subject<IProductDetails>();
  public selectedProduct$ = this.selectedProductSource.asObservable();

  constructor() {}

  public sendProductDetails(product: IProductDetails) {
    this.selectedProductSource.next(product);
  }
}