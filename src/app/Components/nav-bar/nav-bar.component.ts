import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectedProductService } from '../product-details/Modals/selected-product.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public totalItems: number = 0;
  constructor(
    private router: Router,
    private selectedProduct: SelectedProductService
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
}
