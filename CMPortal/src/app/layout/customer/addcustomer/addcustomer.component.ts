import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { LoginResponse } from 'src/app/login/login';
import { Customer } from '../customer';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from 'src/app/shared/toast/toast.component';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent implements OnInit {
  frmAddCustomer: FormGroup;
  submitted = false;
  constructor(
    private toast: ToastComponent,
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private data: Customer
  ) {}

  ngOnInit() {
    this.submitted = false;
    this.frmAddCustomer = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      ContactNo: ['', Validators.required],
      CommunityName: ['', Validators.required],
      Type: 2,
      ParentId: localStorage.getItem('customerId')
      // Id: this.data.Id
    });
  }
  get formFields() {
    return this.frmAddCustomer.controls;
  }

  saveCustomer() {
    debugger;
    this.submitted = true;
    // stop here if form is invalid
    if (this.frmAddCustomer.invalid) {
      return;
    }

    this.customerService.saveCustomer(this.frmAddCustomer.value).subscribe(
      (data: LoginResponse) => {
        if (data['ErrorCode'] === 200) {
          this.toast.setMessage(data['Message'], 'success');
          this.activeModal.dismiss();
        } else {
          this.toast.setMessage(data['Message'], 'danger');
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
