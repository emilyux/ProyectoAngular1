import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dinamico1Component } from './dinamico1/dinamico1.component';
import { Dinamico2Component } from './dinamico2/dinamico2.component';
import { AppComponent } from './app.component';

const routes: Routes = [
//   { path: '', redirectTo: '/dinamico1', pathMatch: 'full' },
  { path: 'dinamico2', component: Dinamico2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }