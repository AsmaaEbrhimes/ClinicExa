import { Core } from './../../Core/Servies/core';
import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../Core/Servies/data';
import { confirmePasswordValidtors } from '../../Core/Vaildtion/MatchPassword';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {

  @Output() createaccount = new EventEmitter<boolean>();
  @Output() exsistaccount = new EventEmitter<boolean>();
  constructor(
    private FB: FormBuilder,
    private data: Data,
    private Core: Core,
  ) {}
  ngOnInit(): void {
    this.createForm();
    this.CheckIsExsistName();
  }


  Formregister = signal<FormGroup>(new FormGroup({}));
  @Output() CloseDilog = new EventEmitter<boolean>();

  createForm() {
    const form = this.FB.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/), Validators.required]],
        userName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{7}$/)]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: confirmePasswordValidtors }
    );
    this.Formregister.set(form);
  }

  onSubmit() {
    if (this.Formregister().invalid) {
      this.Formregister().markAllAsTouched();
      return;
    }
    
    this.data.post('Auth/RegisterDoctor', this.Formregister().value).subscribe((res) => {
      this.HandelRequestSuccess();
    });
  }

  CheckIsExsistName() {
    const control = this.Formregister().get('userName');
    this.Core.checkExistence(control, 'Auth/CheckUserNameExists', 'UserName');
  }

  getControlName(controlName: string) {
    return this.Formregister().get(controlName);
  }

  HandelRequestSuccess() {
    this.Formregister().reset();
    this.CloseDilog.emit(false);
  }

  get passwordChecks() {
    const control = this.Formregister().get('password');
    const errors = control?.errors?.['passwordStrength'];
    const value = control?.value || '';

    return (
      errors || {
        hasUpperCase: /[A-Z]/.test(value),
        hasLowerCase: /[a-z]/.test(value),
        hasNumber: /\d/.test(value),
        hasSpecialChar: /[@$!%*?&]/.test(value),
        hasMinLength: value.length >= 8,
      }
    );
  }

  login() {
    this.exsistaccount.emit(true);
  }

  Register() {
    this.createaccount.emit(false);
  }
}
