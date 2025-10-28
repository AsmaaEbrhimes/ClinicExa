import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthntictionRoutingModule } from './authntiction-routing-module';
import { OTP } from './otp/otp';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared-module';
import { InputOtpModule } from 'primeng/inputotp';

@NgModule({
  declarations: [ OTP],
  imports: [CommonModule, AuthntictionRoutingModule, ReactiveFormsModule, SharedModule,InputOtpModule],
  exports: [OTP],
})
export class AuthntictionModule {}
