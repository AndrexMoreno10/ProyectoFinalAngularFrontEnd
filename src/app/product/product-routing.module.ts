import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClient} from '@angular/common/http';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }