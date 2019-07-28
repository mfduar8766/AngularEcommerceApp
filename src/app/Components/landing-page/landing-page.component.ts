import { Component, OnInit } from '@angular/core';
import { CarouselImages } from './CarouselImages';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public currentIndex: number = 0;
  public Carousel: CarouselImages = new CarouselImages();
  public arrayOfImages: string[] = [];
  public footerTitle: string = 'New Arrivals';
  public footerSubTitle: string =
    'Fender Vintage Series and other hot products.';
  public productData = [
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

  constructor() {}

  ngOnInit() {
    const carouselValues: string[] = Object.values(this.Carousel);
    carouselValues.forEach(item => this.arrayOfImages.push(item));
  }

  goToNextImage(event: Event) {
    event.stopImmediatePropagation();
    if (this.currentIndex < this.arrayOfImages.length - 1) {
      this.currentIndex += 1;
    }
  }

  goToPreviousImage(event: Event) {
    event.stopImmediatePropagation();
    if (this.currentIndex !== 0) {
      this.currentIndex -= 1;
    }
  }
}
