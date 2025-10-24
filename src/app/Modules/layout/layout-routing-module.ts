import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDoctor } from './main-doctor/main-doctor';

const routes: Routes = [
  {path:"",component:MainDoctor}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
