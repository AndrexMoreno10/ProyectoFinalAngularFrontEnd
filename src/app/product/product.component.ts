import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product: Product = new Product();

  constructor(product: Product){
  this.product = product
  }


}
