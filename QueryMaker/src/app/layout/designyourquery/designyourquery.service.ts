import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DuplicateData } from './designyourquery';
import {LoginResponse} from '../../login/login';

@Injectable({
  providedIn: 'root'
})
export class DesignyourqueryService {
  url = 'http://10.33.16.14:8087/api/designQuery/';

  constructor(private http: HttpClient) {}
  duplicateData(duplicate: LoginResponse): Observable<LoginResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('authToken')
      })
    };
    return this.http.post<LoginResponse>(this.url + 'Authenticate', duplicate, httpOptions);
  }
}
