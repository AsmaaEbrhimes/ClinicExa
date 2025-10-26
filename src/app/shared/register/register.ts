import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  constructor(private FB: FormBuilder) {}
  ngOnInit(): void {
    this.createForm();
  }

  Formregister = signal<FormGroup>(new FormGroup({}));

  createForm() {
    const form = this.FB.group({
      name: ['', Validators.required],
      nameEn: ['', Validators.required],
      gender: 1,
      dateOfBirth: {
        year: 0,
        month: 0,
        day: 0,
        dayOfWeek: 0,
      },
      notes: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      nationalId: ['', Validators.required],
      specializationTypeId: 0,
    });

    this.Formregister.set(form);
  }
}
