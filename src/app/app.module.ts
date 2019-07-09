//Default Angular Imports
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

//App Component Imports
import { AppComponent } from "./app.component";
import { CartPageComponent } from "./Components/cart-page/cart-page.component";
import { CheckoutPageComponent } from "./Components/checkout-page/checkout-page.component";
import { NavBarComponent } from "./Components/nav-bar/nav-bar.component";
import { PageNotFoundComponent } from "./Components/page-not-found/page-not-found.component";
import { ProductsPageComponent } from "./Components/products-page/products-page.component";
import { ProductDetailsComponent } from "./Components/product-details/product-details.component";
import { ServicesPageComponent } from "./Components/services-page/services-page.component";
import { AddToCartComponent } from "./Components/add-to-cart/add-to-cart.component";
import { ProductFeaturesComponent } from "./Components/product-details/Components/product-features/product-features.component";
import { ProductDescriptionComponent } from "./Components/product-details/Components/product-description/product-description.component";
import { RecomendedProductsComponent } from "./Components/product-details/Components/recomended-products/recomended-products.component";
import { AddCoverageModalComponent } from "./Components/product-details/Modals/add-coverage-modal/add-coverage-modal.component";
import { SearchBarComponent } from "./Components/search-bar/search-bar.component";

//Material UI Imports
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";

//Services Imports
import { ProductsService } from "./Services/products-service.service";
import { RecomendedProductsService } from "./Services/recomended-products.service";
import { SelectedProductService } from "./Components/product-details/Modals/selected-product.service";

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
    AddToCartComponent,
    ProductFeaturesComponent,
    ProductDescriptionComponent,
    RecomendedProductsComponent,
    AddCoverageModalComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductsService,
    RecomendedProductsService,
    SelectedProductService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddCoverageModalComponent]
})
export class AppModule {}
