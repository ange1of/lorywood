import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @ViewChild('menuButton') menuButton: ElementRef;

  open = false;
  scrollerVisible = false;

  ngOnInit() {
    window.onscroll = () => (this.scrollerVisible = window.scrollY > 20);
  }

  onMenuButtonClick() {
    this.open = !this.open;
    this.menuButton.nativeElement.classList.remove('menu-button-clicked');
    setTimeout(() => this.menuButton.nativeElement.classList.add('menu-button-clicked'));
  }

  onHomeButtonClick() {
    location.reload();
  }

  onUpButtonClick() {
    if (window.scrollY !== 0) {
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  }
}
