import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing-module';
import { CompleteDataDoctor } from './complete-data-doctor/complete-data-doctor';
import { SharedModule } from '../../shared/shared-module';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CompleteDataDoctor
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    DatePickerModule,
    SelectModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }
