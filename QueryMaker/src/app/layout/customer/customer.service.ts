import { Injectable } from '@angular/core';
import {Customer, CustomerList} from './customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = 'http://10.33.16.14:8087/api/User/';
  constructor(private http: HttpClient) { }

  getList(id: string): Observable<CustomerList> {
    return this.http.get<CustomerList>(this.url + 'GetCustomer?parentId='+1, {});
  }
}
