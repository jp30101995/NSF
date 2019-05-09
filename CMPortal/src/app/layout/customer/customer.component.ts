import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer, CustomerList } from './customer';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { LoginResponse } from 'src/app/login/login';
import { count } from 'rxjs-compat/operator/count';
import { DataTableResponse } from 'src/app/shared/data-table-response';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  animations: [routerTransition()]
  // entryComponents: [AddcustomerComponent]
})
export class CustomerComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  customers: Customer[] = [];
  closeResult: string;
  constructor(private modalService: NgbModal, private customerService: CustomerService) {}

  ngOnInit() {
    // this.getAllCustomers();
    this.bindData();
  }

  bindData() {
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      // pageLength: 2,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.customers = [];
        that.customerService.getList(dataTablesParameters).subscribe(
          (data: CustomerList) => {
            // const custs: Customer[] = [];
            // tslint:disable-next-line:forin
            for (const v in data) {
              that.customers.push(data[v]);
            }

            callback({
              recordsTotal: that.customers.length,
              recordsFiltered: that.customers.length,
              data: []
            });
          },
          error => {
            console.log(error);
          }
        );
      },
      columns: [{ data: 'Id' }, { data: 'Name' }, { data: 'Email' }, { data: 'ContactNo' }, { data: 'CommunityName' }]
    };
  }

  getAllCustomers() {
    const result = this.customerService.getList(localStorage.getItem('id')).subscribe(
      (data: CustomerList) => {
        const custs: Customer[] = [];
        // tslint:disable-next-line:forin
        for (const v in data) {
          custs.push(data[v]);
        }
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
          // this.notificationService.openSnackbar(data['Message']);
          this.getAllCustomers();
        } else {
          // this.notificationService.openSnackbar(data['Message']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  // reloadItems(params) {
  //   this.dataSource.query(params).then(items => (this.items = items));
  // }
  rowTooltip(item) {
    return item.jobTitle;
  }

  openDialog(row: Customer) {
    debugger;
    // if (row != null && row !== undefined) {
    //   dialogConfig.data = {
    //     Id: row.Id,
    //     Title: 'Edit Customer',
    //     Name: row.Name,
    //     Email: row.Email,
    //     ContactNo: row.ContactNo,
    //     CommunityName: row.CommunityName
    //   };
    // } else {
    //   dialogConfig.data = {
    //     Id: 0,
    //     Title: 'Add Customer',
    //     Name: '',
    //     Email: '',
    //     ContactNo: '',
    //     CommunityName: ''
    //   };
    // }
    const options: NgbModalOptions = {
      size: 'lg'
    };
    const dialogRef = this.modalService.open(AddcustomerComponent, options);
    this.bindData();
  }
}
