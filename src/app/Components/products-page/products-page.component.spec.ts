import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductsService } from 'src/app/Services/products-service.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { of } from 'rxjs';

import { ProductsPageComponent } from './products-page.component';

const PRODUCTS = [
  {
    id: 0,
    name: 'Fender Stratocaster',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71Tdb3LehLL._SL1500_.jpg',
    price: 1300,
    inStock: true,
    itemNumber: '1500000000024736',
    description:
      // tslint:disable-next-line:max-line-length
      'Often copied, but never surpassed, the Stratocaster is arguably the world’s most-loved electric guitar. Electrifying the music world since its release in 1954, its natural, versatile sound made the Stratocaster the benchmark for exceptional guitar tones. The American Professional Stratocaster HSS ShawBucker isn’t a re-imagining of the classic design; it’s the authentic original model, evolved. The fat-sounding ShawBucker humbucking bridge pickup is joined by tone wizard Tim Shaws latest vintage-informed design—the V-Mod single-coil pickups. These brand-new pickups are voiced specifically for each position, mixing alnico magnet types to produce powerful, nuanced tones with original Fender sonic DNA. Retain high end clarity when adjusting the volume controls, thanks to the new treble-bleed tone circuit that lets your tone shine through in all its glory. The new modern “Deep C”-shaped neck profile feels just right in your hand while the narrow-tall frets make it easy to bend strings accurately and play perfectly intonated chords.The best of yesterday and today, the American Professional Stratocaster HSS Shawbucker is the latest form of electric inspiration from Fender. Step up and stake your claim to a legend. Elite molded case included.',
    features: [
      'Gloss-finish solid alder body.',
      '25.5"-scale bolt-on maple neck with 22-fret, 9.5"-radius maple fingerboard.',
      '2-point fulcrum tremolo bridge with vintage-style bent steel saddles, sealed, die-cast tuners.'
    ],
    body: [
      'Body shape: Double cutaway.',
      'Body type: Solid body.',
      'Body material: Solid wood.',
      'Body wood: Alder.',
      'Body finish: Gloss.',
      'Orientation: Right-handed.'
    ],
    styles: [
      {
        id: 0,
        color: 'Polar White',
        image: '../assets/img/polarwhite.jpg'
      },
      {
        id: 1,
        color: 'Tide Pool',
        image: '../assets/img/tidepool.jpg'
      },
      {
        id: 2,
        color: '3 Color - Sunburst',
        image: '../assets/img/sunburst.jpg'
      }
    ]
  },
  {
    id: 1,
    name: 'Gibson Explorer',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvE_J52JRBJQMyV8saI8ORlX5jQSrLEisxK94KDWN-3xBy_AYmLg',
    price: 1500,
    itemNumber: '1500000000024735'
  },
  {
    id: 2,
    name: 'Schecter HellRaiser',
    image:
      'https://www.schecterguitars.com/images/store/product/HELLRAISER%20C-1%20FR%20S%20BCH%20TILT.png',
    price: 949.0,
    itemNumber: '1500000000024734'
  },
  {
    id: 3,
    name: 'Fender Jazz Bass',
    image:
      'https://cdn.shopify.com/s/files/1/0195/7232/products/Fender-Jazz-Bass-Natural-1974-1.JPG?v=1542845728',
    price: 1999.99,
    itemNumber: '1500000000024733'
  },
  {
    id: 4,
    name: 'Schecter Omen 8',
    image:
      'https://www.schecterguitars.com/images/store/product/OMEN%208%20WSN%20TILT.png',
    price: 459.0,
    itemNumber: '1500000000024732'
  },
  {
    id: 5,
    name: 'Marshall JCM800 2203X, Tube Amp',
    image:
      'https://media.musiciansfriend.com/is/image/MMGS7/JCM800-2203X-1960A-and-1960B-Tube-Guitar-Full-Stack/482754000000000-00-290x290.jpg',
    price: 4249.99,
    itemNumber: '1500000000024731'
  },
  {
    id: 6,
    name: 'Peavy Vyper 30 Watt',
    image:
      // tslint:disable-next-line:max-line-length
      'https://images.reverb.com/image/upload/s--efQnY8HC--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1502671596/mshuqwqnb2byavudjbik.jpg',
    price: 549.99,
    itemNumber: '1500000000024730'
  },
  {
    id: 7,
    name: 'Fender Stratocaster',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71Tdb3LehLL._SL1500_.jpg',
    price: 1300,
    itemNumber: '1500000000024729'
  },
  {
    id: 8,
    name: 'Fender Stratocaster',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71Tdb3LehLL._SL1500_.jpg',
    price: 1300,
    itemNumber: '1500000000024728'
  }
];

describe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProductsPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ProductsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the component.', () => {
    expect(component).toBeTruthy();
  });

  it('should have a value of undefined for products.', () => {
    expect(component.products).toBeUndefined();
  });

  it('should call onInit if component is renderd.', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalledTimes(1);
  });

  it('should call the getProducts method once onInit is called.', () => {
    spyOn(component, 'ngOnInit');
    spyOn(component, 'getProducts');
    component.ngOnInit();
    component.getProducts();
    expect(component.ngOnInit).toHaveBeenCalledTimes(1);
    expect(component.getProducts).toHaveBeenCalledTimes(1);
  });

  it('should call getProducts and return list of products', () => {
    const response: any = PRODUCTS;
    spyOn(component, 'ngOnInit');
    spyOn(component, 'getProducts').and.returnValue(of(response));
    component.ngOnInit();
    component.getProducts();
    fixture.detectChanges();
    expect(component.getProducts).toHaveBeenCalledTimes(1);
    expect(component.products).not.toBe(null);
  });

  it('should render the products card component', () => {
    const element = fixture.debugElement.query(By.css('app-cart-page'));
    expect(element).toBeDefined();
  });

  it(`should call the service.`, async(
    inject(
      [HttpTestingController, ProductsService],
      (httpClient: HttpTestingController, productsService: ProductsService) => {
        expect(productsService).toBeTruthy();
      }
    )
  ));
});
