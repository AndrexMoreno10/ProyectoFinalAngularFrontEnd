import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HogarComponent } from './hogar/hogar.component';
import { DeporteComponent } from './deporte/deporte.component';
import { BellezaCuidadoPersonalComponent } from './belleza-cuidado-personal/belleza-cuidado-personal.component';
import { ElectrodomesticosComponent } from './electrodomesticos/electrodomesticos.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { ProductModule } from './product/product.module';
import { SupplierModule } from './supplier/supplier.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CategoryModule } from './category/category.module'; 
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SearchModule } from './search/search.module';



@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    HogarComponent,
    DeporteComponent,
    BellezaCuidadoPersonalComponent,
    ElectrodomesticosComponent,
    TecnologiaComponent,
    ShoppingCartComponent,
  
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ProductModule,
    SupplierModule,
    CategoryModule,
    SearchModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
