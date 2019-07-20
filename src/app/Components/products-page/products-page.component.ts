import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/Models/products-interface';
import { ProductsService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  public products: IProducts[];

  constructor(private _productsService: ProductsService) { }

  ngOnInit() {
    this._productsService.getProducts().subscribe(product => {
      this.products = product;
    });
  }
}
