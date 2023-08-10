import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-random-cat',
  templateUrl: './random-cat.component.html',
  styleUrls: ['./random-cat.component.scss']
})
export class RandomCatComponent implements OnInit {

  public readonly API_ADDRESS: string = 'https://cataas.com/cat?a=';

  public imgUrl = '';
  public loading = false;
  public random = 0;

  constructor(
    private http: HttpClient
  ) {}


  ngOnInit(): void {
    this.getNewImage()
  }

  public getNewImage(): void {
    this.http.get<any>('https://dog.ceo/api/breeds/image/random').subscribe(resp => {
      this.imgUrl = resp.message;
    })
  }
}
