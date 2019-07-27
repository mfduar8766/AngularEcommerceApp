import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddToCartModalComponent } from '../Modals/add-to-cart-modal/add-to-cart-modal.component';
import { UserStore } from '../../Store/UserStore/user.store';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public totalItems: number = 0;

  constructor(
    private _router: Router,
    private _dialog: MatDialog,
    private _store: UserStore
  ) {}

  ngOnInit() {
    this._store.state$.subscribe(state => {
      this.totalItems = state.user.purchasedProducts.length;
    });
  }

  goToHomePage() {
    this._router.navigate(['']);
  }

  goToCart() {
    this._router.navigate(['checkout']);
  }

  goToServices() {
    this._router.navigate(['services']);
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
      this._dialog.open(AddToCartModalComponent, dialogConfig);
    } else if (event.type === 'click') {
      this._dialog.getDialogById('addToCart').close();
    }
  }
}
