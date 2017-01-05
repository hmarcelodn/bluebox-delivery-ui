import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Routing } from './app.routing';

import { HomeComponent } from './Home/home.component';
import { CustomerComponent } from './Customer/customer.component';

@NgModule({
  imports: [
    BrowserModule,
    Routing
  ],
  declarations: [
    AppComponent,
    CustomerComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
