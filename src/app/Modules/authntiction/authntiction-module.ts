import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthntictionRoutingModule } from './authntiction-routing-module';
import { Register } from '../../shared/register/register';
import { OTP } from './otp/otp';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [ OTP],
  imports: [CommonModule, AuthntictionRoutingModule, ReactiveFormsModule, SharedModule],
  exports: [OTP],
})
export class AuthntictionModule {}
