import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SelectedProductService } from '../../Services/selected-product.service';
import { AddToCartModalComponent } from '../Modals/add-to-cart-modal/add-to-cart-modal.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public totalItems: number = 0;

  constructor(
    private router: Router,
    private selectedProduct: SelectedProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.selectedProduct.selectedProduct$.subscribe(data => {
      const myArray = [];
      myArray.push(data);
      this.totalItems = myArray.length;
    });
  }

  goToHomePage() {
    this.router.navigate(['']);
  }

  goToCart() {
    this.router.navigate(['checkout']);
  }

  goToServices() {
    this.router.navigate(['services']);
  }

  configureModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = 'addToCart';
    dialogConfig.height = '30%';
    dialogConfig.width = '25%';
    dialogConfig.autoFocus = true;
    dialogConfig.data = { totalItems: this.totalItems };
    return dialogConfig;
  }

  toggleAddToCartModal(event: Event) {
    const dialogConfig = this.configureModal();
    if (event.type === 'click') {
      this.dialog.open(AddToCartModalComponent, dialogConfig);
    } else if (event.type === 'click') {
      this.dialog.getDialogById('addToCart').close();
    }
  }
}
