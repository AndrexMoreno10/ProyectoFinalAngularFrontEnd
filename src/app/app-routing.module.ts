import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LoginComponent } from './login/login.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { HogarComponent } from './hogar/hogar.component';
import { DeporteComponent } from './deporte/deporte.component';
import { ElectrodomesticosComponent } from './electrodomesticos/electrodomesticos.component';
import { BellezaCuidadoPersonalComponent } from './belleza-cuidado-personal/belleza-cuidado-personal.component';
import { CarritoDeComprasComponent } from './carrito-de-compras/carrito-de-compras.component';


const routes: Routes = [
{path:'inicio', component: MainComponent},
{path:'categorias', component:CategoriasComponent},
{path:'tecnologia', component:TecnologiaComponent},
{path:'hogar', component:HogarComponent},
{path:'deporte', component:DeporteComponent},
{path:'electrodomesticos', component:ElectrodomesticosComponent},
{path:'belleza y cuidado personal', component:BellezaCuidadoPersonalComponent},
{path:'Login', component:LoginComponent},
{path:'carritoDeCompras', component:CarritoDeComprasComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
