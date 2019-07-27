import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { RecomendedProductsComponent } from './recomended-products.component';

describe('RecomendedProductsComponent', () => {
  let component: RecomendedProductsComponent;
  let fixture: ComponentFixture<RecomendedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecomendedProductsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render.', () => {
    expect(component).toBeTruthy();
  });
});
