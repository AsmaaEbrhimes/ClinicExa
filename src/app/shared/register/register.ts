import { Core } from './../../Core/Servies/core';
import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../Core/Servies/data';
import { Igender } from '../Interface/shared.interface';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  constructor(private FB: FormBuilder, private data: Data, private Core: Core) {}
  ngOnInit(): void {
    this.createForm();
    this.CheckIsExsistName();
    this.GetTypeGender();
  }

  Formregister = signal<FormGroup>(new FormGroup({}));
  dataGender = signal<Igender[]>([]);

  @Output() CloseDilog = new EventEmitter<boolean>();

  createForm() {
    const form = this.FB.group({
      name: ['', Validators.required],
      nameEn: ['', Validators.required],
      gender: 1,
      dateOfBirth: ['', Validators.required],
      notes: [''],
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

  phoneNumber(event: any) {
    this.Formregister().get('phone')?.patchValue(event);
  }

  onSubmit() {
    if (this.Formregister().invalid) {
      this.Formregister().markAllAsTouched();
      return;
    }
    const dateValue = this.Formregister().get('dateOfBirth')?.value;
    if (dateValue) {
      const dateArray = dateValue.toISOString().split('T');
      this.Formregister().patchValue({ dateOfBirth: dateArray[0] });
    }
    this.data.post('Auth/RegisterDoctor', this.Formregister().value).subscribe((res) => {
      if (res) {
        this.Formregister().reset();
        this.CloseDilog.emit(false);
      }
    });
  }

  GetTypeGender() {
    this.data.get<Igender[]>('GeneralEnums/Gender').subscribe((res) => {
      this.dataGender.set(res);
    });
  }

  CheckIsExsistName() {
    const control = this.Formregister().get('userName');
    this.Core.checkExistence(control, 'Auth/CheckUserNameExists', 'UserName');
  }

  getControlName(controlName: string) {
    return this.Formregister().get(controlName);
  }
}
