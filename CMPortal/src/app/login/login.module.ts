import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from 'src/app/shared/toast/toast.component';
@NgModule({
  imports: [CommonModule, TranslateModule, LoginRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  providers: [ToastComponent]
})
export class LoginModule {}
