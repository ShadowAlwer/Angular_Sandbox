import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomCatComponent } from './random-cat/random-cat.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/blank'
  },
  {
    path: 'blank',
    component: BlankComponent
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
