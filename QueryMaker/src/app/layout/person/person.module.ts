import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PersonRoutingModule } from './person-routing.module';
import { AddpersonComponent } from './addperson/addperson.component';
import { PersonComponent } from './person.component';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatCheckboxModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [PersonComponent, AddpersonComponent],
  imports: [
    CommonModule,
    CommonModule,
    MatCheckboxModule,
    PersonRoutingModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false })
  ],
  entryComponents: [AddpersonComponent]
})
export class PersonModule {}
