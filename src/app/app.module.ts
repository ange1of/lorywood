import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InstagramWidgetComponent } from './instagram-widget/instagram-widget.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { MapComponent } from './map/map.component';
import { NotificationComponent } from './notification/notification.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainPageComponent,
    InstagramWidgetComponent,
    OrderFormComponent,
    MapComponent,
    NotificationComponent,
    GalleryComponent,
    ReviewsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
