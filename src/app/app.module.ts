import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LoginComponent } from './login/login.component';
import { HogarComponent } from './hogar/hogar.component';
import { DeporteComponent } from './deporte/deporte.component';
import { BellezaCuidadoPersonalComponent } from './belleza-cuidado-personal/belleza-cuidado-personal.component';
import { ElectrodomesticosComponent } from './electrodomesticos/electrodomesticos.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { CarritoDeComprasComponent } from './carrito-de-compras/carrito-de-compras.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    CategoriasComponent,
    LoginComponent,
    HogarComponent,
    DeporteComponent,
    BellezaCuidadoPersonalComponent,
    ElectrodomesticosComponent,
    TecnologiaComponent,
    CarritoDeComprasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
