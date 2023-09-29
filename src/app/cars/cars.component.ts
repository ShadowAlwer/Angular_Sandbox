import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  public owner: string = '';
  public modelName: string = '';
  public yearOfProduction: string = '';
  public mark: string = '';
  public color: string = '';

  public cars: Car[] = [
    {
      modelName: 'Tucson',
      mark: 'Hundai',
      color: 'red',
      owner: 'Alex',
      yearOfProduction: '2000'
    },
        {
      modelName: 'Agyou',
      mark: 'Toyota',
      color: 'blue',
      owner: 'Patryk',
      yearOfProduction: '2021'
    },
  ]

  submit() {
    // TODO;
  }
}

export interface Car {
  owner: string;
  modelName: string;
  yearOfProduction: string;
  mark: string;
  color: string;
}
