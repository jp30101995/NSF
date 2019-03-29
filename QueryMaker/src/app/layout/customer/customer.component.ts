import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer, CustomerList } from './customer';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';

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

  constructor(private customerService: CustomerService, public dialog: MatDialog) {
    this.getAllCustomers();
  }

  ngOnInit() { }

  openDialog() {
    const dialogRef = this.dialog.open(AddcustomerComponent, {
      width: '600px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => { });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getAllCustomers() {
    const result = this.customerService.getList(localStorage.getItem('id')).subscribe(
      (data: CustomerList) => {
        const custs: Customer[] = [];
        for (const v in data) {
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
