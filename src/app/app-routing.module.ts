import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPageComponent } from './Components/products-page/products-page.component';
import { CheckoutPageComponent } from './Components/checkout-page/checkout-page.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ServicesPageComponent } from './Components/services-page/services-page.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/cart', component: CartPageComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const AppRoutes = [
  LandingPageComponent,
  ProductsPageComponent,
  CartPageComponent,
  ProductDetailsComponent,
  CheckoutPageComponent,
  ServicesPageComponent,
  PageNotFoundComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
