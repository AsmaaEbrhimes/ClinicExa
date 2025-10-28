import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../Core/Servies/data';
import { Router } from '@angular/router';

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

  CreateForm() {
    let form = this.FB.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.FormLogin.set(form);
  }

  onSubmit(){
    this.data.post('Auth/Login',this.FormLogin().value).subscribe((res)=>{
      console.log(res)
    })
  }
}
