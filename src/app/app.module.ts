import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';

import { HomeComponent } from './Home/home.component';
import { CustomerComponent } from './Customer/customer.component';
import { OrderComponent } from './Order/order.component';

@NgModule({
  imports: [
    BrowserModule,
    Routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    CustomerComponent,
    HomeComponent,
    OrderComponent
  ],
  bootstrap: [ AppComponent ],
  providers: []
})

export class AppModule { }
