import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor() {}
  toggelHeader = signal<boolean>(false);
  visible: boolean = false;
  visible2: boolean = false;

  showDialogRegister() {
    this.visible = true;
  }

  showDialogLogin() {
    this.visible2 = true;
  }

  CloseDilog() {
    this.visible = false;
    this.visible2 = false;
  }


  onToggelMenue() {
    this.toggelHeader.set(!this.toggelHeader());
  }
}
