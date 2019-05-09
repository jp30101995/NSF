import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { AuthService } from './auth.service';
import { httpInterceptorProviders } from './http-interceptor/index';
@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LanguageTranslationModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [AuthGuard, AuthService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
