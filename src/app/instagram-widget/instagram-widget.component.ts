import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-instagram-widget',
  templateUrl: './instagram-widget.component.html',
  styleUrls: ['./instagram-widget.component.scss'],
})
export class InstagramWidgetComponent implements OnInit {
  @Input()
  public postId: string;
  iframeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  static buildEmbedUrl(postId: string) {
    return `https://www.instagram.com/p/${postId}/embed`;
  }

  ngOnInit(): void {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      InstagramWidgetComponent.buildEmbedUrl(this.postId)
    );
  }
}
