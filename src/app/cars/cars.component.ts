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

  submit() {
    // TODO;
  }
}
