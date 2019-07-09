export interface IProducts {
  id: 0;
  name: string;
  image: string;
  price: number;
  inStock: boolean;
  itemNumber: string;
  description: string;
  features: string[];
  body: string[];
  styles: [
    {
      id: number;
      color: string;
      image: string;
    }
  ];
}

export interface IProductStyle {
  id: number;
  color: string;
  image: string;
}

export interface IProductDetails {
  id: number;
  itemNumber: string;
  name: string;
  price: number;
  style: string;
}
