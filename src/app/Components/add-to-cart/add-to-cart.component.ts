import { Component, OnInit, Input } from '@angular/core';
import { IProducts } from 'src/app/Models/products-interface';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
@Input() product: IProducts;

  constructor() { }

  ngOnInit() {
  }

}
