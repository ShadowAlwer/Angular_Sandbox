import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomCatComponent } from './random-cat/random-cat.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/cat'
  },
  {
    path: 'cat',
    component: RandomCatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
