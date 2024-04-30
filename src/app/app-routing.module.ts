import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DidikComponent } from './didik/didik.component';
import { HanjarComponent } from './hanjar/hanjar.component';
const routes: Routes = [
  { path: 'didik', component: DidikComponent ,},
  { path: 'pak-hanjar', component: HanjarComponent ,}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
