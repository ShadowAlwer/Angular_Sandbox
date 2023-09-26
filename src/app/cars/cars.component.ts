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

  displayOwner = '';
  displayName = '';
  displayYear = '';
  displayModel = '';
  displayColor = '';

  i1 = [this.enterOwner];
  i2 = [this.enterName];
  i3 = [this.enterYear];
  i4 = [this.enterModel];
  i5 = [this.enterColor];

  getOwner(val: string){
    console.warn(val)
    this.displayOwner = val;
  }

  getName(val: string){
    console.warn(val)
    this.displayName = val;
  }

  getYear(val: string){
    console.warn(val)
    this.displayYear = val;
  }

  getModel(val: string){
    console.warn(val)
    this.displayModel = val;
  }

  getColor(val: string){
    console.warn(val)
    this.displayColor = val;
  }
}
