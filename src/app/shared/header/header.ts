import { Component, Input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  /**********************************Varibel Component*****************************************/
  toggelHeader = signal<boolean>(false);
  visible: boolean = false;
  visible2: boolean = false;

  @Input()
  set drawerDoctor(value: boolean) {
    console.log(value)
    this.visible = value;
  }
  /**********************************Varibel Component*****************************************/





  /**********************************Function Component*****************************************/
  showDialogRegister() {
    this.visible = true;
  }

  showDialogLogin() {
    this.visible2 = true;
  }

  onCloseDilog() {
    this.visible = false;
    this.visible2 = false;
  }

  onCreateAccpunt() {
    this.visible2 = false;
    this.visible = true;
  }

  isExsistAccount() {
    this.visible2 = true;
    this.visible = false;
  }

  onToggelMenue() {
    this.toggelHeader.set(!this.toggelHeader());
  }
  /**********************************Function Component*****************************************/
}
