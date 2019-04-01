import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { LoginResponse } from 'src/app/login/login';
import { NotificationService } from 'src/app/shared/services/notification.service';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {
  title: string;
  frmAddCustomer: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddcustomerComponent>,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.title = data.title;
  }

  ngOnInit() {
    this.frmAddCustomer = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      ContactNo: ['', Validators.required],
      CommunityName: ['', Validators.required],
      Type: 2,
      ParentId: localStorage.getItem('customerId')
    });
  }

  get formFields() {
    return this.frmAddCustomer.controls;
  }

  saveCustomer() {
    this.customerService.saveCustomer(this.frmAddCustomer.value).subscribe(
      (data: LoginResponse) => {
        if (data['ErrorCode'] === 200) {
          this.notificationService.openSnackbar(data['Message']);
          this.onNoClick();
        } else {
          this.notificationService.openSnackbar(data['Message']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  close() {
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
