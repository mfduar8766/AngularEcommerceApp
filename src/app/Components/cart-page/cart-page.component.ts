import { Component, OnInit, Input } from '@angular/core';
import { IProducts } from 'src/app/Models/products-interface';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  @Input() product: IProducts;

  constructor() { }

  ngOnInit() {
  }

}
