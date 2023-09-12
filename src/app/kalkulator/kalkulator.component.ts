import { Component } from '@angular/core';

@Component({
  selector: 'app-kalkulator',
  templateUrl: './kalkulator.component.html',
  styleUrls: ['./kalkulator.component.scss']
})
export class KalkulatorComponent {

  public displayValue: string = '';
  public displayPreviousValue: string = '';

  onClearAll() {
    this.displayValue = '';
  }

  removeLastInput() {
    console.log('Click');
    this.displayValue = this.displayValue
      .slice(0, -1)
  }

  addToDisplay(symbol: string) {
    this.displayValue += symbol;
  }

  // evaluateDisplay() {
  //   this.displayValue = eval(this.displayValue);
  // }

  previousValue(){
    this.displayPreviousValue = eval(this.displayValue);
  }

}
