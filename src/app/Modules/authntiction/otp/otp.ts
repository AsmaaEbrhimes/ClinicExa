import { Data } from './../../../Core/Servies/data';
import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-otp',
  standalone: false,
  templateUrl: './otp.html',
  styleUrl: './otp.scss',
})
export class OTP implements OnInit {
  ngOnInit(): void {
    this.createFormOtp();
  }
  constructor(private FB: FormBuilder, private data: Data, private Router: Router) {}
  FormOtp = signal<FormGroup>(new FormGroup({}));

  createFormOtp() {
    let form = this.FB.group({
      code: ['', Validators.required],
    });
    this.FormOtp.set(form);
  }

  onSupmit() {
    if(this.FormOtp().invalid){
      return
    }
    const formvalue=this.FormOtp().value
    const otp={
      code:formvalue.code.trim()
    }
    this.data.post('Auth/ConfirmEmail',otp).subscribe((res)=>{
    })
  }
}
