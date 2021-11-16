import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { ContactBodyComponent } from './contact-body/contact-body.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBarComponent,
    BodyComponent,
    ContactComponent,
    ContactBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
