import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PersonService } from '../person.service';
import { LoginResponse } from 'src/app/login/login';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Person } from '../person';
@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.scss']
})
export class AddpersonComponent implements OnInit {
  frmAddPerson: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddpersonComponent>,
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: Person
  ) {}

  ngOnInit() {
    debugger;
    this.frmAddPerson = this.formBuilder.group({
      FirstName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      LastName: ['', Validators.required],
      MiddleName: ['', Validators.required],
      Phone: ['', Validators.required]
    });
  }

  get formFields() {
    return this.frmAddPerson.controls;
  }

  savePerson() {
    this.personService.savePerson(this.frmAddPerson.value).subscribe(
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
