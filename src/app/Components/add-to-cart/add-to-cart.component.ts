import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IProducts } from "src/app/Models/products-interface";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add-to-cart",
  templateUrl: "./add-to-cart.component.html",
  styleUrls: ["./add-to-cart.component.css"]
})
export class AddToCartComponent implements OnInit {
  @Input() product: IProducts;
  @Input() selectedStyle: string;
  @Output() errorMessage: EventEmitter<string> = new EventEmitter();

  public productQuantity: number = 1;
  public isThereAnError: boolean = false;
  public setErrorMessage: string = " Please choose a quantity.";

  constructor() {}

  ngOnInit() {}

  incrementQuantitySelected() {
    this.productQuantity++;
  }

  decrementQuantitySelected() {
    if (this.productQuantity !== 1) {
      this.productQuantity--;
    }
  }

  isStyleSelected(event: Event, untouched: boolean) {
    if (
      event.type === "click" &&
      this.selectedStyle === "" &&
      untouched === true
    ) {
      event.preventDefault();
      const error = "Please select a style before adding to cart.";
      this.errorMessage.emit(error);
      this.isThereAnError = true;
    }
    this.isThereAnError = false;
    this.errorMessage.emit("");
  }

  addToCart(value: NgForm) {
    if (this.selectedStyle === "") {
      this.isThereAnError = true;
      const error = "Please select a style before adding to cart.";
      this.errorMessage.emit(error);
    } else if (this.selectedStyle !== "") {
      this.isThereAnError = false;
      this.errorMessage.emit("");
    }
  }
}
