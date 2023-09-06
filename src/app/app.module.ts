import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomCatComponent } from './random-cat/random-cat.component';
import { BlankComponent } from './blank/blank.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChampionsComponent } from './champions/champions.component';
import { ChampDetailsComponent } from './champ-details/champ-details.component';
import { KalkulatorComponent } from './kalkulator/kalkulator.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomCatComponent,
    BlankComponent,
    ChampionsComponent,
    ChampDetailsComponent,
    KalkulatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
