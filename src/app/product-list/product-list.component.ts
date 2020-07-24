import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:any=[];
  cartItems:any=[];
  currentUser:any;
  searchList:any=[];
  itemStore:any=[];
  productName:string;
  count:number=0;
  constructor(private _ProductServiceService:ProductServiceService) { }

  ngOnInit(): void {
   this._ProductServiceService.getProducts().subscribe(data => {
    this.productList = data;
    this.itemStore =  this.productList;
   });
   this.currentUser = localStorage.getItem('userName');

  }
 addToCart(elt){
   this.cartItems.push(elt)
   this.count++;
   console.log("cartItems",this.cartItems);
 }
 searchByName(val) {
  this.productName= val;
  var inputVal = val.toLowerCase().trim();
  var newList = this.productList.filter((item) => {
    var title = item.title.toLowerCase();
    if (title.indexOf(inputVal) > -1) {
      this.searchList.push(item);
      this.productList = this.searchList;

    }
  });
}
oldListHide(val){
  this.productList = val;
}
}
