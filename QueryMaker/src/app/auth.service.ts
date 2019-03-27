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
    if (localStorage.getItem('authToken')) {
      return localStorage.getItem('authToken');
    } else {
      return '';
    }
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
