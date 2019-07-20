import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProducts, IProductDetails } from 'src/app/Models/products-interface';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddCoverageModalComponent } from '../product-details/Modals/add-coverage-modal/add-coverage-modal.component';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  @Input() product: IProducts;
  @Input() selectedStyle: string;
  @Input() isThereAnError: boolean;
  @Output() errorMessage: EventEmitter<string> = new EventEmitter();

  public productQuantity: number = 1;
  public setErrorMessage: string = ' Please choose a quantity.';

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  incrementQuantitySelected() {
    this.productQuantity++;
  }

  decrementQuantitySelected() {
    if (this.productQuantity !== 1) {
      this.productQuantity--;
    }
  }

  isStyleSelected(event: Event) {
    if (event.type === 'click' && this.selectedStyle === '') {
      event.preventDefault();
      const error = 'Please select a style before adding to cart.';
      this.errorMessage.emit(error);
      this.isThereAnError = true;
      return this.isThereAnError;
    } else if (this.selectedStyle !== '') {
      this.errorMessage.emit('');
    }
  }

  configureDialog(product: IProductDetails[]) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '500px';
    dialogConfig.width = '600px';
    dialogConfig.autoFocus = true;
    dialogConfig.data = product;
    return dialogConfig;
  }

  openModal(product: IProductDetails[]) {
    const dialogConfig = this.configureDialog(product);
    const dialogRef = this.dialog.open(AddCoverageModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => data);
  }

  createProduct() {
    const { name, price, itemNumber, id } = this.product;
    const chosenProduct: IProductDetails[] = [
      {
        id,
        itemNumber,
        name,
        price,
        style: this.selectedStyle !== '' ? this.selectedStyle : null
      }
    ];
    return chosenProduct;
  }

  addToCart(event: Event) {
    const isStyleSelected = this.isStyleSelected(event);
    if (!isStyleSelected) {
      this.errorMessage.emit('');
      const product = this.createProduct();
      this.openModal(product);
    }
  }
}
