// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HotelListComponent } from './pages/hotel-list/hotel-list.component'; // ✅ Make sure this is a standalone component

@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    BrowserModule,
    FormsModule,
    HotelListComponent // ✅ Import standalone component here
  ],
  providers: [],
  bootstrap: [] // ✅ Don't forget to bootstrap the main AppComponent
})
export class AppModule { }
