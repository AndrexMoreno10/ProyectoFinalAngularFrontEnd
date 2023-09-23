import { Component,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  @Input() resultStatus: boolean = true;
  @Output() resultStatusChange = new EventEmitter<boolean>();

  showLoginApareces(){
    this.resultStatus = true;
    this.resultStatusChange.emit(this.resultStatus)
  }

  showLoginDesaper(){
      this.resultStatus = false;
      this.resultStatusChange.emit(this.resultStatus)
    }
  

}
