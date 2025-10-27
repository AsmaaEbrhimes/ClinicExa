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
@NgModule({
  declarations: [Header, Footer, Loader, Register, Login],
  imports: [CommonModule, SharedRoutingModule, DialogModule, ButtonModule,ReactiveFormsModule, DatePickerModule],
  exports: [Header, Footer, Loader],
})
export class SharedModule {}
