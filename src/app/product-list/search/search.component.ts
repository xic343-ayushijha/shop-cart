import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchVal:any;
  searchList: any = [];
  @Output() searchItem = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  searchProduct(){
    this.searchItem.emit(this.searchVal);
  }

}
