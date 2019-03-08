import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


import { DesignyourquerygRoutingModule } from './designyourquery-routing.modules';
import { DesignyourqueryComponent } from './designyourquery.component';
import { StatModule } from '../../shared/modules/stat/stat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule, MatCardModule, MatButtonModule,MatCheckboxModule, MatDatepickerModule,
  MatFormFieldModule, MatInputModule, MatNativeDateModule, MatRadioModule, MatSelectModule,
  MatSliderModule, MatSlideToggleModule
} from '@angular/material';
@NgModule({
  declarations: [DesignyourqueryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    DesignyourquerygRoutingModule,
    StatModule,
    MatCardModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class DesignyourqueryModule { }
