import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing-module';
import { MainDoctor } from './main-doctor/main-doctor';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [
    MainDoctor
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
