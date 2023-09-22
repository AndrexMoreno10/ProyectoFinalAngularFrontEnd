import { Injectable  } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from './product';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  urlApi = environment.API_URL_PRODUCTS

  constructor(private http:HttpClient) { 

  }

  product(product: Product) {

    let json = JSON.stringify(product)
    return this.http.post<Product>(this.urlApi,json)
  }
}
