import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InstagramWidgetComponent } from './instagram-widget/instagram-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainPageComponent,
    InstagramWidgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
