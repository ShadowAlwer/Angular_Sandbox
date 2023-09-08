import { Component } from '@angular/core';

@Component({
  selector: 'app-kalkulator',
  templateUrl: './kalkulator.component.html',
  styleUrls: ['./kalkulator.component.scss']
})
export class KalkulatorComponent {

  public displayValue: string = ''; 

  onClearAll() {
    console.log('Click');
    this.displayValue = '';
  }

  removeLastInput() {
    console.log('Click');
    this.displayValue = this.displayValue
      .split('')
      .splice(this.displayValue.length - 1, 1)
      .join();
  }

  addToDisplay(symbol: string) {
    this.displayValue += symbol;
  }

  evaluateDisplay() {
    this.displayValue = eval(this.displayValue);


  }

}
