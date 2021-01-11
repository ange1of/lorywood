import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InstagramWidgetComponent } from './instagram-widget/instagram-widget.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { MapComponent } from './map/map.component';
import { NotificationComponent } from './notification/notification.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainPageComponent,
    InstagramWidgetComponent,
    FeedbackFormComponent,
    MapComponent,
    NotificationComponent,
    GalleryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
