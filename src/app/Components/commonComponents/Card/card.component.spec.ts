import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  const productData = [
    {
      title: 'Daily Pick',
      image: '../../../assets/img/pick.jpeg',
      altText: 'This is an image.',
      promotionalData: 'Order in store or online.',
      productName: 'Fender Stratocaster',
      productImage: '../../../assets/img/sunburst.jpg',
      productImageAltText: 'Fender Stratocaster 2019.',
      discountPrice: 1050,
      savings: 250,
      originalPrice: 1300
    }
  ];

  const header: boolean = false;
  const footer: boolean = false;
  const cardBody: boolean = false;
  const promotionalSlogan: boolean = false;
  const borderRight: boolean = false;
  const footerTitle: string = null;
  const footerSubTitle: string = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.productData = productData;
    component.header = header;
    component.borderRight = borderRight;
    component.cardBody = cardBody;
    component.footer = footer;
    component.promotionalSlogan = promotionalSlogan;
    component.footerSubTitle = footerTitle;
    component.footerSubTitle = footerSubTitle;
    fixture.detectChanges();
  });

  it('should render.', () => {
    expect(component).toBeTruthy();
  });

  it('should render the image logo if header is true.', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.productData = productData;
    component.header = true;
    fixture.detectChanges();
    const imageTag = fixture.debugElement.query(By.css('.image-logo'))
      .nativeElement;
    expect(imageTag).toBeTruthy();
  });

  it('should not render anything if header is false.', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.productData = productData;
    component.header = false;
    fixture.detectChanges();
    const imageTag = fixture.debugElement.query(By.css('.image-logo'));
    expect(imageTag).toBeFalsy();
  });

  it('should display the card body with details if cardBody is true.', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.productData = productData;
    component.cardBody = true;
    fixture.detectChanges();
    const productName = fixture.debugElement.query(By.css('.product-name'))
      .nativeElement;
    expect(productName).toBeTruthy();
  });

  it('should display the image instead of the card details if cardBody is false.', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.productData = productData;
    component.cardBody = false;
    fixture.detectChanges();
    const cardImage = fixture.debugElement.query(By.css('.card-image'))
      .nativeElement;
    const productName = fixture.debugElement.query(By.css('.product-name'));
    expect(cardImage).toBeTruthy();
    expect(productName).toBeFalsy();
  });

  it('should have a footer if footer is true', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.productData = productData;
    component.footer = true;
    fixture.detectChanges();
    const footerContainer = fixture.debugElement.query(
      By.css('.footer-container')
    ).nativeElement;
    expect(footerContainer).toBeTruthy();
  });
});
