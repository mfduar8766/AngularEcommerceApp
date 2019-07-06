import { Component, OnInit, Input } from "@angular/core";
import { IProducts } from "src/app/Models/products-interface";

@Component({
  selector: "app-product-description",
  templateUrl: "./product-description.component.html",
  styleUrls: ["./product-description.component.css"]
})
export class ProductDescriptionComponent implements OnInit {
  @Input() product: IProducts;
  @Input() productStyles: [{ id: number; color: string; image: string }];

  public firstHalfOfProductDescription: string;
  public secondHalfOfProductDescription: string;
  public showDescription: boolean = false;
  public selectedProduct: string = "";
  public errorMessage: string = "";
  public selectedStyle: string = "";

  constructor() {}

  ngOnInit() {}

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

  setImageContainerClass(event: Event, productColor: string) {
    if (event.type === "mouseover") {
      this.selectedProduct = productColor;
      const classes = {
        "img-container:hover": productColor
      };
      return classes;
    } else if (event.type === "mouseout") {
      this.selectedProduct = "";
      const classes = {
        "img-container": productColor
      };
      return classes;
    }
  }

  getErrorMessage(message: string) {
    return (this.errorMessage = message);
  }

  setProductStyle(event: Event, style: string) {
    if (event.type === "click") {
      return (this.selectedStyle = style);
    }
  }
}
