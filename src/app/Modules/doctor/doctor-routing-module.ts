import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompleteDataDoctor } from './complete-data-doctor/complete-data-doctor';

const routes: Routes = [
  {path:"completedatadoctor",component:CompleteDataDoctor}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
