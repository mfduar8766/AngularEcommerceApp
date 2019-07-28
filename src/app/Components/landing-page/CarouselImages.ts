export class CarouselImages {
  public ImageOne: string;
  public imageTwo: string;
  public imageThree: string;
  // public defaultImages = {};

  constructor(image?: any) {
    const defaultProps = {
      imageOne: '../../../assets/img/metallica.jpg',
      imageTwo: '/assets/img/drummer.jpg',
      imageThree: '/assets/img/guitars.jpg',
      ...image
    };

    (this.ImageOne = defaultProps.imageOne),
      (this.imageTwo = defaultProps.imageTwo),
      (this.imageThree = defaultProps.imageThree);
  }

  // this.defaultImages = {
  //   imageOne: '../../../assets/img/metallica.jpg',
  //   imageTwo: '/assets/img/drummer.jpg',
  //   imageThree: '/assets/img/guitars.jpg'
  // };

  // addNewImage(image: string) {
  //   this.defaultImages = {
  //     ...this.defaultImages,
  //     image
  //   };
}
