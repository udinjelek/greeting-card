import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DidikComponent } from './didik/didik.component';
import { HanjarComponent } from './hanjar/hanjar.component';

@NgModule({
  declarations: [
    AppComponent,
    DidikComponent,
    HanjarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
