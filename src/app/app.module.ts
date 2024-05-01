import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DidikComponent } from './didik/didik.component';
import { HanjarComponent } from './hanjar/hanjar.component';
import { DialogEid24Component } from './dialog-eid24/dialog-eid24.component';

@NgModule({
  declarations: [
    AppComponent,
    DidikComponent,
    HanjarComponent,
    DialogEid24Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
