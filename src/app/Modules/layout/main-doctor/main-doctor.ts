import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-main-doctor',
  standalone: false,
  templateUrl: './main-doctor.html',
  styleUrl: './main-doctor.scss',
})
export class MainDoctor implements OnInit {
   toolDoctor = signal<{icon:string,text:string}[]>([]);
  ngOnInit(): void {
    this.getAllToolDoctor();
  }

  getAllToolDoctor() {
    this.toolDoctor.set(
      [
        {icon:"fa-solid fa-heart-pulse",text:"heart"},
        {icon:"fa-solid fa-brain",text:"brain"},
        {icon:"fa-solid fa-tooth",text:"tooth"},
        {icon:"fa-solid fa-lungs",text:"lungs"},
        {icon:"fa-solid fa-briefcase-medical",text:"medical"},
        {icon:"fa-solid fa-flask",text:"flask"},
        {icon:"fa-solid fa-hospital",text:"hospital"},
        {icon:"fa-solid fa-stethoscope",text:"stethoscope"},
      ]
    )
  }
}
