import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/login/login';
import { Apiurl } from 'src/app/shared/apiurl';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  url = Apiurl.apiurl;
  getList(id: string): Observable<User> {
    return this.http.get<User>(this.url + 'GetUser?parentId=' + id);
  }

  saveUser(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url + 'AddUser', user);
  }
}
