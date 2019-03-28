import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { from } from 'rxjs';
import { Login, LoginResponse } from './login';
import { HttpResponse } from '@angular/common/http';
import { NotificationService } from '../shared/services/notification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  FrmLogin: FormGroup;
  isLogin: false;
  constructor(
    private router: Router,
    private formbulider: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService
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

  onLogin() {
    // if(this.FrmLogin.su){
    //     this.isLogin=false;
    // }
    debugger;
    const login = this.FrmLogin.value;
    const result = this.loginService.login(login).subscribe(
      (data: LoginResponse) => {
        debugger;
        if (data['ErrorCode'] === 200) {
          localStorage.setItem('authToken', data['Message']);
          localStorage.setItem('isLoggedin', 'true');
          this.router.navigate(['/dashboard']);
        } else {
          this.notificationService.openSnackbar(data['Message']);
          console.log(data['Message']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
