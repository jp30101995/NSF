import { Injectable } from '@angular/core';
import { Customer, CustomerList } from './customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/login/login';
import { Apiurl } from 'src/app/shared/api-url';
import { isNullOrUndefined } from 'util';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  url = Apiurl.apiurl;
  parentId = !isNullOrUndefined(localStorage.getItem('parentId')) ? localStorage.getItem('parentId') : 0;
  getList(param: any): Observable<CustomerList> {
    const data = {
      parentId: this.parentId,
      param: param
    };
    return this.http.post<CustomerList>(this.url + 'GetCustomer', data);
  }

  saveCustomer(customer: Customer): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url + 'AddCustomer', customer);
  }

  deleteCustomer(id: number): Observable<LoginResponse> {
    return this.http.delete<LoginResponse>(this.url + 'DeleteCustomer/' + id);
  }
}
