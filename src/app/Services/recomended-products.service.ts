import { Injectable } from '@angular/core';
import { IRecomededProducts } from '../Models/recomendedProducts-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecomendedProductsService {
  private recomededProductsURL = 'assets/recommendedProducts.json';

  constructor(private http: HttpClient) {}

  getRecomendedProducts(): Observable<IRecomededProducts[]> {
    return this.http.get<IRecomededProducts[]>(this.recomededProductsURL);
  }
}

