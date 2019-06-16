import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products-service.service';
import { IProducts } from 'src/app/Models/products-interface';
import { ActivatedRoute}from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDetails: IProducts[];
  firstHalfOfProductDescription: string;
  secondHalfOfProductDescription: string;
  showDescription: boolean = false;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(({id}) => {
      const parsedID = parseInt(id);
      this.getData(parsedID);
   });
  }

  getData(id: number) {
    this.productsService.getProducts().subscribe(product => {
        const filterProducts = product.filter(item => {
          if(item.id === id) {
            return item;
          }
        });
        this.productDetails = filterProducts;
    });
  }

  getFirstHalfOfDesciption() {
    const description = this.productDetails[0].description;
    const firstHalfOfString = description.slice(0, 397);
    return this.firstHalfOfProductDescription = firstHalfOfString;
  }

  getSecondHalfOfDescription() {
    const description = this.productDetails[0].description;
    const secondHalfOfString = description.slice(397);
    return this.secondHalfOfProductDescription = secondHalfOfString;
  }

  setShowDescription() {
    this.showDescription = !this.showDescription;
  }


}
