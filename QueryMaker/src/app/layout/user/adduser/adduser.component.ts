import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { LoginResponse } from 'src/app/login/login';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { User } from '../user';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  frmAddUser: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AdduserComponent>,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  ngOnInit() {
    this.frmAddUser = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      ContactNo: ['', Validators.required],
      CommunityName: localStorage.getItem('communityName'),
      Type: 3,
      ParentId: localStorage.getItem('customerId'),
      Id: this.data.Id
    });
  }

  get formFields() {
    return this.frmAddUser.controls;
  }

  saveUser() {
    this.userService.saveUser(this.frmAddUser.value).subscribe(
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
