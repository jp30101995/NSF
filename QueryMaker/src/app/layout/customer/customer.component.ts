import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer, CustomerList } from './customer';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { forEach } from '../../../../node_modules/@angular/router/src/utils/collection';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  displayedColumns = ['Id', 'Name', 'Email', 'Contact'];
  dataSource: MatTableDataSource<Customer>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private customerService: CustomerService) {
    this.getAllCustomers();
  }

  ngOnInit() {

  }

  getAllCustomers() {
    const result = this.customerService.getList(localStorage.getItem("id")).subscribe(
      (data: CustomerList) => {
        const custs: Customer[] = [];
        debugger;
        // data.forEach(element => {

        // });
        // data.array.forEach(element => {

        // });
        // for (let i = 1; i <= data; i++) {
        //   custs.push(data[i]);
        // }

        for (var v in data) {
          custs.push(data[v]);
        }
        this.dataSource = new MatTableDataSource(custs);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      }
    );
  }
}
