import { Injectable } from '@angular/core';
import { Apiurl } from 'src/app/shared/apiurl';
import { Observable } from 'rxjs';
import { CustomerList, Customer } from '../customer/customer';
import { LoginResponse } from 'src/app/login/login';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  url = Apiurl.apiurl;
  getList(id: string): Observable<CustomerList> {
    return this.http.get<CustomerList>(this.url + 'GetCustomer?parentId=' + 1, {});
  }

  saveCustomer(customer: Customer): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url + 'AddCustomer', customer);
  }

  deleteCustomer(id: number): Observable<LoginResponse> {
    return this.http.delete<LoginResponse>(this.url + 'DeleteCustomer/' + id);
  }
}
