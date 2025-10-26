import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

import { SharedRoutingModule } from './shared-routing-module';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { AuthntictionModule } from '../Modules/authntiction/authntiction-module';

import { Loader } from './loader/loader';
import { ReactiveFormsModule } from '@angular/forms';
import { Register } from './register/register';
import { Login } from './login/login';

@NgModule({
  declarations: [Header, Footer, Loader, Register, Login],
  imports: [CommonModule, SharedRoutingModule, DialogModule, ButtonModule,ReactiveFormsModule],
  exports: [Header, Footer, Loader],
})
export class SharedModule {}
