import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ListProductComponent} from './list-product/list-product.component';
import { ViewProductComponent } from './view-product/view-product.component';



@NgModule({
  declarations: [
    ProductComponent,
    ListProductComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports:[
    ProductComponent,
    ListProductComponent,
    ViewProductComponent


  ]
})
export class ProductModule { }
