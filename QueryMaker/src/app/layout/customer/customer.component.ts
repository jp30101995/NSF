import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer, CustomerList } from './customer';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllCustomers() {
    const result = this.customerService.getList(localStorage.getItem("id")).subscribe(
      (data: CustomerList) => {
        debugger;
        const custs: Customer[] = [];
        for (let i = 1; i <= 100; i++) {
          custs.push(data.Customers[i]);
        }
        this.dataSource = new MatTableDataSource(custs);
      },
      error => {
        console.log(error);
      }
    );
  }
}
