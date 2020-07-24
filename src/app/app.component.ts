import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-cart';
  checkLogin(){
    var loginToken = localStorage.getItem('token');
    if(loginToken){
      window.location.href = "/products";
    }
    else {
      window.location.href = "/login";
    }
  }
  logoutUser(){
    localStorage.clear();
  }
}
