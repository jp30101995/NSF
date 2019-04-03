import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login, LoginResponse } from './login';
import { Apiurl } from '../shared/apiurl';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}
  login(login: Login): Observable<LoginResponse> {
    debugger;
    return this.http.post<LoginResponse>(Apiurl.apiurl + 'Authenticate', login);
  }
}
