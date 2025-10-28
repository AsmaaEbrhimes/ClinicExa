import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OTP } from './otp/otp';

const routes: Routes = [
  {path: "otp", component:OTP},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthntictionRoutingModule { }
