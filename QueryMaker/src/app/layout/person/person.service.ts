import { Injectable } from '@angular/core';
import { Apiurl } from 'src/app/shared/apiurl';
import { Observable } from 'rxjs';
import { CustomerList, Customer } from '../customer/customer';
import { LoginResponse } from 'src/app/login/login';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private http: HttpClient) {}

  url = Apiurl.apiurl;
  getList(id: string): Observable<CustomerList> {
    return this.http.get<CustomerList>(this.url + 'GetPerson?personId=' + 0);
  }

  savePerson(person: Person): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url + 'AddPerson', person);
  }

  deleteCustomer(id: number): Observable<LoginResponse> {
    return this.http.delete<LoginResponse>(this.url + 'DeleteCustomer/' + id);
  }
}
