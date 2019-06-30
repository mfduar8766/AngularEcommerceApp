import { Component, OnInit, Input } from '@angular/core';
import { IProducts } from 'src/app/Models/products-interface';

@Component({
  selector: "app-product-features",
  template: `
    <div class="features-container">
      <h1>Features</h1>
      <ul *ngFor="let features of productFeatures">
        <li>{{ features }}</li>
      </ul>
      <h1>Specifications</h1>
      <ul *ngFor="let bodyDetails of productBodyDetails">
        <li>{{ bodyDetails }}</li>
      </ul>
    </div>
  `,
  styleUrls: ["./product-features.component.css"]
})
export class ProductFeaturesComponent implements OnInit {
  @Input() product: IProducts;
  public productFeatures: String[];
  public productBodyDetails: String[];

  constructor() {}

  ngOnInit() {
    this.productFeatures = this.product.features;
    this.productBodyDetails = this.product.body;
  }
}
