import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraComponent } from './barra/barra.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { Dinamico1Component } from './dinamico1/dinamico1.component';


import { AppRoutingModule } from './app-routingmodule';
import { Dinamico2Component } from './dinamico2/dinamico2.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    MenuComponent,
    FooterComponent,
    Dinamico1Component,
    Dinamico2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
