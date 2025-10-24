import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthntictionRoutingModule } from './authntiction-routing-module';
import { Register } from './register/register';
import { Login } from './login/login';
import { OTP } from './otp/otp';


@NgModule({
  declarations: [
    Register,
    Login,
    OTP
  ],
  imports: [
    CommonModule,
    AuthntictionRoutingModule
  ]
})
export class AuthntictionModule { }
