import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  displayValue = '';

  getValue(val: string){
    console.warn(val)
    this.displayValue = val;
  }

  public enterValue: string = '';

  headers = ["Name and Surname", "Name", "Year", "Car Model", "Color"];

  displays = [this.enterValue];
}
