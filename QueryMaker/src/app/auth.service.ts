import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isUndefined, isNullOrUndefined } from 'util';
import { LoginResponse, Login } from './login/login';
/** Mock client-side authentication/authorization service */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://10.33.16.14:8087/api/Authenticate';
  constructor(private http: HttpClient) {}
  getAuthorizationToken() {
      return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlF1ZXJ5TWFrZXJBSiIsIm5iZiI6MTU1MjY1MzcxNywiZXhwIjoxNTUzMjU4NTE3LCJpYXQiOjE1NTI2NTM3MTcsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAxOTEiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwMTkxIn0.394JzE68MUEM0p3YxRXn3UwQtYbRV21JUH87RVypD3A';
    // if (localStorage.getItem('authToken')) {
    //   // return localStorage.getItem('authToken');
    //   return true;
    // } else {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // };
    // // return '';
    // this.http.post<string>(this.url, {}, httpOptions)
    // .subscribe(
    //   (data: string) => {
    //     localStorage.setItem('authToken', data);
    //      //return data['message'];
    //   },
    //   error => {
    //     console.log(error);
    //      //return '';
    //   }
    // );
  }
  //   }
}
