import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { CartPageComponent } from './cart-page.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'products/:id', component: ProductDetailsComponent }
        ])
      ],
      declarations: [CartPageComponent, ProductDetailsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    component.product = {
      id: 0,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71Tdb3LehLL._SL1500_.jpg',
      name: 'Fender Stratocaster',
      price: 1300,
      inStock: true,
      itemNumber: '1500000000024736',
      description: '',
      features: [],
      body: [],
      styles: [{ id: 0, color: '', image: '' }]
    };
    fixture.detectChanges();
  });

  it('should render the component.', () => {
    expect(component).toBeTruthy();
  });

  it('should have a prop of product', () => {
    expect(component.product).not.toBe(undefined);
  });

  it('should have a price of 1300.', () => {
    expect(component.product.price).toEqual(1300);
  });

  it('should go to the individual product page on click of the image.', () => {
    const href = fixture.debugElement
      .query(By.css('.img-link'))
      .nativeElement.getAttribute('href');
    expect(href).toEqual('/products/0');
  });

  it('should go to the individual product page on click of the nmae of the product.', () => {
    const href = fixture.debugElement
      .query(By.css('.img-name'))
      .nativeElement.getAttribute('href');
    expect(href).toEqual('/products/0');
  });

  it('should display the product name.', () => {
    const name = fixture.debugElement.query(By.css('.card-title'))
      .nativeElement;
    expect(name.textContent).toEqual('Fender Stratocaster');
  });

  it('should display the product price', () => {
    const price = fixture.debugElement.query(By.css('.price')).nativeElement;
    expect(price.textContent).toEqual('$1,300.00');
  });
});
