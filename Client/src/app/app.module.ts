import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { API_BASE_URL, Client } from 'src/client';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    { provide: API_BASE_URL, useValue: '/api' },
    { provide: Client }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
