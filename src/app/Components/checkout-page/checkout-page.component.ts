import { Component, OnInit } from '@angular/core';
import { SelectedProductService } from '../product-details/Modals/selected-product.service';
import { IProductDetails } from 'src/app/Models/products-interface';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  public product: IProductDetails;
  constructor(private selectedProduct: SelectedProductService) {}

  ngOnInit() {
    this.selectedProduct.selectedProduct$.subscribe(data => {
      this.product = data;
      console.log(this.product);
    });
  }
}
