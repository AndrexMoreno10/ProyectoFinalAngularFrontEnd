import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  urlApiCategory = environment.API_URL_CATEGORY

  constructor(private http:HttpClient) {


   }

   getAllCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.urlApiCategory)
  }

  
  
  }
