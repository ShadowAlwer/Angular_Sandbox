import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomCatComponent } from './random-cat/random-cat.component';
import { BlankComponent } from './blank/blank.component';
import { ChampionsComponent } from './champions/champions.component';
import { ChampDetailsComponent } from './champ-details/champ-details.component';
import { KalkulatorComponent } from './kalkulator/kalkulator.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/cars'
  },
  {
    path: 'blank',
    component: BlankComponent
  },
  {
    path: 'cat',
    component: RandomCatComponent
  },
  {
    path: 'champs',
    component: ChampionsComponent
  },
  {
    path: 'champs/:champId',
    component: ChampDetailsComponent
  },
  {
    path: 'kalkulator',
    component: KalkulatorComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
