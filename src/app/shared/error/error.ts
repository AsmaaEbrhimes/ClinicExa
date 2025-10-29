import { Component } from '@angular/core';
import { Core } from '../../Core/Servies/core';

@Component({
  selector: 'app-error',
  standalone: false,
  templateUrl: './error.html',
  styleUrl: './error.scss',
})
export class Error {
constructor(private core:Core){}
get ResultError(){
  return this.core._Error.asObservable()
}

HiddenError(){
  this.core._Error.next(false)
}
}
