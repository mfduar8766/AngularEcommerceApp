import { Component, OnInit, Input } from '@angular/core';
import { IRecomededProducts } from 'src/app/Models/recomendedProducts-interface';

@Component({
  selector: 'app-recomended-products',
  templateUrl: './recomended-products.component.html',
  styleUrls: ['./recomended-products.component.css']
})
export class RecomendedProductsComponent implements OnInit {
@Input() recomendedProductsData: IRecomededProducts[];

  constructor() { }

  ngOnInit() {
  }

}
