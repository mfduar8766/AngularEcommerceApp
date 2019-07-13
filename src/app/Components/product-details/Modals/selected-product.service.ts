import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProductDetails } from 'src/app/Models/products-interface';

@Injectable({
  providedIn: 'root'
})
export class SelectedProductService {
  private selectedProductSource = new Subject<IProductDetails>();
  public selectedProduct$ = this.selectedProductSource.asObservable();

  constructor() {}

  sendProductDetails(product: IProductDetails) {
    this.selectedProductSource.next(product);
  }
}
