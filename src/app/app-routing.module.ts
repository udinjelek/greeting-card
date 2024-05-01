import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DidikComponent } from './didik/didik.component';
import { HanjarComponent } from './hanjar/hanjar.component';
import { DialogEid24Component } from './dialog-eid24/dialog-eid24.component';
const routes: Routes = [
  { path: 'didik', component: DidikComponent ,},
  { path: 'pak-hanjar', component: HanjarComponent ,}, 
  { path: 'de24', component: DialogEid24Component ,}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
