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
  }
}
