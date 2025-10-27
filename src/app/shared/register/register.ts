import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Data } from '../../Core/Servies/data';
import { Data } from '../../Core/Servies/data';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  constructor(private FB: FormBuilder, private data: Data) {}
  ngOnInit(): void {
    this.createForm();
  }

  Formregister = signal<FormGroup>(new FormGroup({}));

  createForm() {
    const form = this.FB.group({
      name: ['', Validators.required],
      nameEn: ['', Validators.required],
      gender: 1,
      dateOfBirth: ['', Validators.required],
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

onSubmit() {
  const rawValue = this.Formregister().value;

  const date = new Date(rawValue.dateOfBirth);

  if (isNaN(date.getTime())) {
    return;
  }

  const dateOfBirthObj = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    dayOfWeek: date.getDay(),
  };

  const finalData = {
    ...rawValue,
    dateOfBirth: dateOfBirthObj,
  };

  this.data.post('Auth/RegisterDoctor', finalData).subscribe({
    next: (res) => console.log('✅ تم الإرسال:', res)
  });

}




}
