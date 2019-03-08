import { Component, OnInit, Input } from '@angular/core';
import { StatComponent } from '../../shared/modules/stat/stat.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-designyourquery',
  templateUrl: './designyourquery.component.html',
  styleUrls: ['./designyourquery.component.scss']
})
export class DesignyourqueryComponent implements OnInit {
public count;
queryForm:any;

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit() {

    this.queryForm=  this.formBuilder.group({

    });
  }

  getActioncount(data) {
    this.count = data.actioncount;
  }

  createQuery(objEvent){
    
  }
}
