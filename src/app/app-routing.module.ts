import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { HogarComponent } from './hogar/hogar.component';
import { DeporteComponent } from './deporte/deporte.component';
import { ElectrodomesticosComponent } from './electrodomesticos/electrodomesticos.component';
import { BellezaCuidadoPersonalComponent } from './belleza-cuidado-personal/belleza-cuidado-personal.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ListProductComponent } from './product/list-product/list-product.component';



const routes: Routes = [
{path:'', component: MainComponent},
{path:'tecnologia', component:TecnologiaComponent},
{path:'hogar', component:HogarComponent},
{path:'deporte', component:DeporteComponent},
{path:'electrodomesticos', component:ElectrodomesticosComponent},
{path:'belleza y cuidado personal', component:BellezaCuidadoPersonalComponent},
{path:'Login', component:LoginComponent},
{path:'ShoppingCart', component:ShoppingCartComponent}, 
{ path: 'category/:categoryId', component: ListProductComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
