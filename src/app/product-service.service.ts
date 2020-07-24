import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }
  getProducts() {
    var urlBundle: any = [];
    urlBundle = this.http.get(`https://xebiascart.herokuapp.com/products`);
    return urlBundle;
  }
  loginApi(){
    var loginData: any = [];
    loginData = this.http.get(`https://xebiascart.herokuapp.com/users`).pipe(
      retry(1),
      catchError(this.handleError));;
    return loginData;
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
