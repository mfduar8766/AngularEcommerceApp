import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products-service.service';
import { IProducts, IProductStyle } from 'src/app/Models/products-interface';
import { ActivatedRoute } from '@angular/router';
import { RecomendedProductsService } from 'src/app/Services/recomended-products.service';
import { IRecomededProducts } from 'src/app/Models/recomendedProducts-interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public productDetails: IProducts[];
  public recomendedProductsData: IRecomededProducts[];
  public productStyles: IProductStyle[];

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private recomededProducts: RecomendedProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      const parsedID = parseInt(id);
      this.getProductDetails(parsedID);
    });
    this.recomededProducts.getRecomendedProducts().subscribe(product => {
      return (this.recomendedProductsData = product);
    });
  }

  getProductDetails(id: number) {
    this.productsService.getProducts().subscribe(product => {
      const filterProducts = product.filter(item => {
        if (item.id === id) {
          return item;
        }
      });
      this.productDetails = filterProducts;
      if (this.productDetails && this.productDetails.length) {
        this.productStyles = this.productDetails[0].styles || [];
      }
    });
  }
}
