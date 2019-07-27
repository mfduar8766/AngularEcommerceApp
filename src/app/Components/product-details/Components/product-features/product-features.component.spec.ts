import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync
} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ProductFeaturesComponent } from './product-features.component';
import { IProducts } from 'src/app/Models/products-interface';

describe('ProductFeaturesComponent', () => {
  let component: ProductFeaturesComponent;
  let fixture: ComponentFixture<ProductFeaturesComponent>;
  const features = [
    'Gloss-finish solid alder body.',
    '25.5"-scale bolt-on maple neck with 22-fret, 9.5"-radius maple fingerboard.',
    '2-point fulcrum tremolo bridge with vintage-style bent steel saddles, sealed, die-cast tuners.'
  ];
  const product: IProducts = {
    id: 0,
    name: '',
    image: '',
    price: 0,
    inStock: false,
    itemNumber: '',
    description: '',
    features: features,
    body: [''],
    styles: []
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFeaturesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFeaturesComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  });

  it('should render.', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInt', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.ngOnInit).toHaveBeenCalledTimes(1);
  });

  it('should display the features.', () => {
    fakeAsync(() => {
      fixture.detectChanges();
      const productFeatures = fixture.debugElement.query(
        By.css('.productFeatures')
      ).nativeElement;
      expect(productFeatures.textContent).toEqual(
        'Gloss-finish solid alder body'
      );
    });
  });
});
