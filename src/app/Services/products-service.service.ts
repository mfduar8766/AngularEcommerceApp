import { Injectable } from '@angular/core';
import { IProducts } from '../Models/products-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private mockDataURL = 'assets/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.mockDataURL);
  }

}
