import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  @Input()
  headerText: string;

  @Input()
  mainText: string;

  @Input()
  remember: string;

  visible = false;

  constructor() {}

  ngOnInit(): void {
    if (this.remember) {
      if (!window.localStorage.getItem(`${this.remember}:showed`)) {
        this.visible = true;
      }
    } else {
      this.visible = true;
    }
  }

  onCloseClick(): void {
    this.visible = false;
    window.localStorage.setItem(`${this.remember}:showed`, 'true');
  }
}
