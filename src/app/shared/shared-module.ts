import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SharedRoutingModule } from './shared-routing-module';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Loader } from './loader/loader';
import { ReactiveFormsModule } from '@angular/forms';
import { Register } from './register/register';
import { Login } from './login/login';
import { DatePickerModule } from 'primeng/datepicker';
import { Success } from './success/success';
import { Error } from './error/error';
import { TelphoneInput } from './telphone-input/telphone-input';
import { Translation } from './translation/translation';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [Header, Footer, Loader, Register, Login, Success, Error, TelphoneInput, Translation],
  imports: [
    CommonModule,
    SharedRoutingModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    DatePickerModule,
     TranslateModule.forChild() 
  ],
  exports: [Header, Footer, Loader, Success, Error, TelphoneInput,TranslateModule],

})
export class SharedModule {}
