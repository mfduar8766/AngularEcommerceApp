import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { CheckoutPageComponent } from './Components/checkout-page/checkout-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ProductsPageComponent } from './Components/products-page/products-page.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { ServicesPageComponent } from './Components/services-page/services-page.component';
import { AddToCartComponent } from './Components/add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    NavBarComponent,
    PageNotFoundComponent,
    ServicesPageComponent,
    ProductDetailsComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
