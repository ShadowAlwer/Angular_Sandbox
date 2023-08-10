import { Component } from '@angular/core';

@Component({
  selector: 'app-random-cat',
  templateUrl: './random-cat.component.html',
  styleUrls: ['./random-cat.component.scss']
})
export class RandomCatComponent {

  public loading = false;
  public random = 0;

  public getNewCat(): void {
    this.random = Math.floor(Math.random() * 1000)
  }
}
