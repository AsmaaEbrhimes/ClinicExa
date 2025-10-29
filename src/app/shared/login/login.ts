import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../Core/Servies/data';
import { Router } from '@angular/router';
import * as jwtdecoded from 'jwt-decode';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  ngOnInit(): void {
    this.CreateForm();
  }

  constructor(private FB: FormBuilder, private data: Data, private Router: Router) {}

  FormLogin = signal<FormGroup>(new FormGroup({}));
  @Output() CloseDilog = new EventEmitter<boolean>();

  CreateForm() {
    let form = this.FB.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.FormLogin.set(form);
  }

  onSubmit() {
    if (this.FormLogin().invalid) {
      this.FormLogin().markAllAsTouched();
      return;
    }
    const formValue = this.FormLogin().value;
    const cleanedData = {
      userName: formValue.userName.trim(),
      password: formValue.password.trim(),
    };
    this.data.post('Auth/Login', cleanedData).subscribe((res: any) => {
      this.HandelResponseSuccess(res);
    });
  }



  HandelResponseSuccess(res: any) {
    this.FormLogin().reset();
    sessionStorage.setItem('token', res.token);
    setTimeout(() => {
      this.Router.navigate(['auth/otp']);
    }, 2000);
    let decodedToken = jwtdecoded.jwtDecode(res.token);
    this.CloseDilog.emit(false);
  }

  
    getControlName(controlname: string) {
    return this.FormLogin().get(controlname);
  }
}
