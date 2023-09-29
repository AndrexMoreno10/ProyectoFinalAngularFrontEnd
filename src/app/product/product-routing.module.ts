import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { ViewProductComponent } from './view-product/view-product.component';
import { ListProductComponent } from './list-product/list-product.component';


const routes: Routes = [

  {path: 'product/:id', component: ViewProductComponent },
  {path: 'products/category/:id', component: ListProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
