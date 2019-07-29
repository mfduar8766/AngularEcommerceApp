// Default Angular Imports
import { AppRoutingModule, AppRoutes } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// App Component Imports
import { AppComponent } from './app.component';
import { AddToCartComponent } from './Components/add-to-cart/add-to-cart.component';
import { CardComponent } from './Components/commonComponents/Card/card.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ProductFeaturesComponent } from './Components/product-details/Components/product-features/product-features.component';
import { ProductDescriptionComponent } from './Components/product-details/Components/product-description/product-description.component';
import { RecomendedProductsComponent } from './Components/product-details/Components/recomended-products/recomended-products.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';

// Modals
import { AddCoverageModalComponent } from './Components/product-details/Modals/add-coverage-modal/add-coverage-modal.component';
import { AddToCartModalComponent } from './Components/Modals/add-to-cart-modal/add-to-cart-modal.component';

// Angular Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

// Services Imports
import { ProductsService } from './Services/products-service.service';
import { RecomendedProductsService } from './Services/recomended-products.service';

// Store Imports
import { ProductsStore } from './Store/ProductsStore/products.store';
import { UserStore } from './Store/UserStore/user.store';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutes,
    CardComponent,
    FooterComponent,
    NavBarComponent,
    AddToCartComponent,
    ProductFeaturesComponent,
    ProductDescriptionComponent,
    RecomendedProductsComponent,
    AddCoverageModalComponent,
    SearchBarComponent,
    AddToCartModalComponent
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
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductsService,
    RecomendedProductsService,
    ProductsStore,
    UserStore
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddCoverageModalComponent, AddToCartModalComponent]
})
export class AppModule {}
