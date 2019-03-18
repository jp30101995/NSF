import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login, LoginResponse } from './login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://10.33.16.14:8087/api/User/';

  constructor(private http: HttpClient) {}
  login(login: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url + 'Authenticate', login);
  }
}
