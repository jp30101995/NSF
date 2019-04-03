import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer, CustomerList } from './customer';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { LoginResponse } from 'src/app/login/login';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  displayedColumns = ['Select', 'Id', 'Name', 'Email', 'Contact', 'Actions'];
  dataSource: MatTableDataSource<Customer>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selection = new SelectionModel<Customer>(true, []);

  constructor(private customerService: CustomerService, public dialog: MatDialog, private notificationService: NotificationService) {}

  ngOnInit() {
    this.getAllCustomers();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Customer): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Id + 1}`;
  }

  openDialog(row: Customer) {
    const dialogConfig = new MatDialogConfig();
    if (row != null && row !== undefined) {
      dialogConfig.data = {
        Id: row.Id,
        Title: 'Edit Customer',
        Name: row.Name,
        Email: row.Email,
        ContactNo: row.ContactNo,
        CommunityName: row.CommunityName
      };
    } else {
      dialogConfig.data = {
        Id: 0,
        Title: 'Add Customer',
        Name: '',
        Email: '',
        ContactNo: '',
        CommunityName: ''
      };
    }
    dialogConfig.width = '500px';
    dialogConfig.height = '500px';
    const dialogRef = this.dialog.open(AddcustomerComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.getAllCustomers();
    });
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

  deleteCustomer(row) {
    this.customerService.deleteCustomer(row.Id).subscribe(
      (data: LoginResponse) => {
        if (data['ErrorCode'] === 200) {
          this.notificationService.openSnackbar(data['Message']);
          this.getAllCustomers();
        } else {
          this.notificationService.openSnackbar(data['Message']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
