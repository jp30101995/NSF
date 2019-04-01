import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import {
  MatBottomSheetModule, MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule, MatOptionModule, MatPaginatorModule,
  MatProgressBarModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CustomerComponent, AddcustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddcustomerComponent
]
})
export class CustomerModule { }
