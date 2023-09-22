import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';

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
import { ProductComponent } from './product/product.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CategoryComponent } from './category/category.component';


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
    ProductComponent,
    SupplierComponent,
    CategoryComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
