import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  open = false;
  scrollerVisible = false;

  ngOnInit() {
    window.onscroll = () => (this.scrollerVisible = window.scrollY > 20);
  }

  onMenuButtonClick() {
    this.open = !this.open;
  }

  onHomeButtonClick() {
    if (window.scrollY !== 0) {
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  }
}
