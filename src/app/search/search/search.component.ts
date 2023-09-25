import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  capturarSearch: string = '';
  @Output() returnSearch = new EventEmitter<String>();

  onSearch(capturarSearch:String){
   
    this.returnSearch.emit(this.capturarSearch)
    console.log(this.capturarSearch)
 
  }
}
