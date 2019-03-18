import { Component, OnInit, Input } from '@angular/core';
import { StatComponent } from '../../shared/modules/stat/stat.component';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { DesignyourqueryService } from './designyourquery.service';
import { LoginResponse } from '../../login/login';

@Component({
  selector: 'app-designyourquery',
  templateUrl: './designyourquery.component.html',
  styleUrls: ['./designyourquery.component.scss']
})
export class DesignyourqueryComponent implements OnInit {
  public count;
  FrmGrp: FormGroup;
  constructor(private formBuilder: FormBuilder, private designyourqueryService: DesignyourqueryService) {}

  ngOnInit() {
    this.FrmGrp = this.formBuilder.group({
      TableName: ['', Validators.required],
      Fields: ['', Validators.required]
    });
  }

  getActioncount(data) {
    this.count = data.actioncount;
  }

  get formFields() {
    return this.FrmGrp.controls;
  }

  createQuery() {
    const response = this.designyourqueryService.duplicateData(this.FrmGrp.value).subscribe(
      (data: LoginResponse) => {

        // if (data['ErrorCode'] === 200) {
        //   localStorage.setItem('authToken', data['Message']);
        //   localStorage.setItem('isLoggedin', 'true');
        //   //this.router.navigate(['/dashboard']);
        // } else {
        //    //this.notificationService.openSnackbar(data['Message']);
        //   console.log(data['Message']);
        // }
      },
      error => {
        console.log(error);
      }
    );
  }
}
