import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header{
  constructor(){}

  visible: boolean = false;
  visible2: boolean = false;

  showDialog() {
    this.visible = true;
  }

   showDialogLogin() {
    this.visible2 = true;
  }
}
