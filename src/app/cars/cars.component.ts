import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  public enterOwner: string = '';
  public enterName: string = '';
  public enterYear: string = '';
  public enterModel: string = '';
  public enterColor: string = '';

  public cars: Car[] = [
    {
      Owner: 'Jan Kowalski',
      Name: 'Buka',
      Year: '1989 r.',
      Model: 'Audi',
      Color: 'red'
    },
    {
      Owner: 'Adam Nowak',
      Name: 'Mumin',
      Year: '1973 r.',
      Model: 'BMW',
      Color: 'black'
    },
  ]

  submit() {
    const newCar = {
      Owner: this.enterOwner,
      Name: this.enterName,
      Year: this.enterYear,
      Model: this.enterModel,
      Color: this.enterColor,
    }

    this.cars.push(newCar);
  }
}

export interface Car {
  Owner: string,
  Name: string,
  Year: string,
  Model: string,
  Color: string,
}
