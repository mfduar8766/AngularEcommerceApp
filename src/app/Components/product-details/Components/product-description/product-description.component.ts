import { Component, OnInit, Input } from '@angular/core';
import { IProducts } from 'src/app/Models/products-interface';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  @Input() product: IProducts;
  public firstHalfOfProductDescription: string;
  public secondHalfOfProductDescription: string;
  public showDescription: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  getFirstHalfOfDesciption() {
    const description = this.product.description;
    const firstHalfOfString = description.slice(0, 397);
    return (this.firstHalfOfProductDescription = firstHalfOfString);
  }

  getSecondHalfOfDescription() {
    const description = this.product.description;
    const secondHalfOfString = description.slice(397);
    return (this.secondHalfOfProductDescription = secondHalfOfString);
  }
}
