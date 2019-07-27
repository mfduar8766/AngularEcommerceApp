import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, ComponentFactoryResolver } from '@angular/core';
import { ProductsService } from '../../Services/products-service.service';
import { RecomendedProductsService } from '../../Services/recomended-products.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
// This will be used.
// import { By } from '@angular/platform-browser';
import { of, Subject } from 'rxjs';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Params
} from '@angular/router';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  let params: Subject<Params>;

  beforeEach(async(() => {
    params = new Subject<Params>();
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProductDetailsComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        ProductsService,
        RecomendedProductsService,
        { provide: ActivatedRoute, useValue: { params: params } }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the component.', () => {
    expect(component).toBeTruthy();
  });

  it('should call onInit', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalledTimes(1);
  });

  /* Keep this here until I can figure out how to properly test it.
        it('should have a route param of 0.', () => {
    params.next({ id: 0 });
    let test;
    params.subscribe(data => {
      console.log('DATATATATA', data);
      test = data;
    });
    spyOn(component, 'getProductDetails');
    // component.getProductDetails(parmID);
    fixture.detectChanges();
  });

  it('should have a value for productDetails', () => {
    spyOn(component, 'ngOnInit');
    spyOn(component, 'getProductDetails');
    component.ngOnInit();
    component.getProductDetails(0);
    inject(
      [HttpTestingController, ProductsService],
      (
        httpClient: HttpTestingController,
        productsService: RecomendedProductsService
      ) => {
        expect(productsService).toBeTruthy();
      }
    );
    fixture.detectChanges();
    // expect(component.productDetails).not.toBe(undefined);
  });
  */

  it(`should call the product service.`, async(
    inject(
      [HttpTestingController, ProductsService],
      (httpClient: HttpTestingController, productsService: ProductsService) => {
        expect(productsService).toBeTruthy();
      }
    )
  ));

  it(`should call the recomended product service.`, async(
    inject(
      [HttpTestingController, ProductsService],
      (
        httpClient: HttpTestingController,
        productsService: RecomendedProductsService
      ) => {
        expect(productsService).toBeTruthy();
      }
    )
  ));
});

describe('ProductDetailsComponent', () => {
  it('should render.', () => {
    expect(ProductDetailsComponent).toBeDefined();
  });

  it('should call onInit', () => {
    spyOn(ProductDetailsComponent.prototype, 'ngOnInit');
    ProductDetailsComponent.prototype.ngOnInit();
    expect(ProductDetailsComponent.prototype.ngOnInit).toHaveBeenCalledTimes(1);
  });

  it('should call getProductDetails once ngOninit is called.', () => {
    spyOn(ProductDetailsComponent.prototype, 'ngOnInit');
    spyOn(ProductDetailsComponent.prototype, 'getProductDetails');
    ProductDetailsComponent.prototype.ngOnInit();
    ProductDetailsComponent.prototype.getProductDetails(0);
    expect(
      ProductDetailsComponent.prototype.getProductDetails
    ).toHaveBeenCalledTimes(1);
  });
});
