import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram-widget',
  templateUrl: './instagram-widget.component.html',
  styleUrls: ['./instagram-widget.component.scss'],
})
export class InstagramWidgetComponent implements OnInit {
  @Input()
  public postId!: string;

  get iframeSrc() {
    return `https://www.instagram.com/p/${this.postId}/embed`;
  }

  ngOnInit(): void {}
}
