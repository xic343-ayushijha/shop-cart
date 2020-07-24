import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData;
  userName: any;
  password: any;
  userError: boolean = false;
  randomNum: any;
  pwdError: boolean = false;
  constructor(private _ProductServiceService: ProductServiceService) { }

  ngOnInit(): void {
    this._ProductServiceService.loginApi().subscribe(data => {
      this.loginData = data;
    });
    this.randomNum = Math.random();
  }
  loginUser() {
    if (this.userName == '') {
      this.userError = true;
    }
    else if (this.password == '') {
      this.pwdError = true;
    }
    if (this.loginData !== null) {
      this.loginData.filter(item => {
        if (item.username == this.userName && item.password == this.password) {
          localStorage.setItem('userName', this.userName);
          window.location.href = "/products";
          localStorage.setItem('token', this.randomNum);
        }
      });
    }
    else {
      alert("error while loggin in");
    }
  }

}
