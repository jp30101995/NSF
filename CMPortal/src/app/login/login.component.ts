import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Login, LoginResponse } from './login';
import { isNullOrUndefined } from 'util';
import { routerTransition } from '../router.animations';
import { ToastComponent } from 'src/app/shared/toast/toast.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  FrmLogin: FormGroup;
  isLogin: false;
  submitted = false;
  constructor(
    private router: Router,
    private formbulider: FormBuilder,
    private loginService: LoginService,
    private toast: ToastComponent
  ) {}

  ngOnInit() {
    this.FrmLogin = this.formbulider.group({
      Username: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get formFields() {
    return this.FrmLogin.controls;
  }
  onLoggedin() {

    this.submitted = true;

        // stop here if form is invalid
        if (this.FrmLogin.invalid) {
            return;
        }
    const login = this.FrmLogin.value;
    const result = this.loginService.login(login).subscribe(
      (data: LoginResponse) => {
        if (data.Response['ErrorCode'] === 200) {
          debugger;
          localStorage.setItem('authToken', data.Response['Message']);
          localStorage.setItem('isLoggedin', 'true');

          if (data.User != null) {
            localStorage.setItem('userId', !isNullOrUndefined(data.User.Id) ? data.User.Id.toString() : '');
            localStorage.setItem('userName', !isNullOrUndefined(data.User.Username) ? data.User.Username : '');
          }
          if (data.Customer != null) {
            localStorage.setItem('parentId', data.Customer.ParentId.toString());
            localStorage.setItem('customerId', data.Customer.Id.toString());
            localStorage.setItem('customerName', data.Customer.Name);
            localStorage.setItem('communityName', data.Customer.CommunityName.toString());
          }
          localStorage.setItem('menuItem', JSON.stringify(data.Modules));

          this.router.navigate(['/dashboard']);
        } else {
          this.toast.setMessage(data.Response['Message'], 'danger');
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
