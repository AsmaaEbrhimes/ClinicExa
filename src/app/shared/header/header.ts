import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor() {}

  visible: boolean = false;
  visible2: boolean = false;
  visibleDrawer: boolean = false;

  showDialog() {
    this.visible = true;
    this.visibleDrawer = false;
  }

  showDialogLogin() {
    this.visible2 = true;
    this.visibleDrawer = false;
  }

  CloseDilog() {
    this.visible = false;
    this.visible2 = false;
  }

  ShowDraw() {
    this.visibleDrawer = true;
  }
}
