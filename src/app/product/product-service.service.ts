import { Injectable  } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  urlApi = environment.API_URL_PRODUCTS
  urlApiCategory = environment.API_URL_CATEGORY

  constructor(private http:HttpClient) { 

  }

  product(product: Product) {
    let json = JSON.stringify(product)
    return this.http.post<Product>(this.urlApi,json)
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.urlApi}/${productId}`);
  }

   getAllProducts():Observable<Product[]>{
     return this.http.get<Product[]>(this.urlApi)
   }

   
  findByCategory(categoryId : number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.urlApi}/category/${categoryId}`);
  }





}
