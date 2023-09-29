import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ProductServiceService } from './product/product-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoFinalAppsAngular';

  resultStatus = true;

}


