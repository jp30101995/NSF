import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { DataTablesModule } from 'angular-datatables';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from 'src/app/shared/toast/toast.component';
@NgModule({
  declarations: [CustomerComponent, AddcustomerComponent],
  imports: [CommonModule, CustomerRoutingModule, FormsModule, ReactiveFormsModule, DataTablesModule, PageHeaderModule, NgbModule.forRoot()],
  entryComponents: [AddcustomerComponent],
  providers: [ToastComponent]
})
export class CustomerModule {}
