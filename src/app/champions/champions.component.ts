import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {

  // "http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion.json"
  // http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/Aatrox.png

  public champsData: ChampsData = {};

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}


  ngOnInit(): void {
    console.log("Request data")
    this.http.get<ChampsData>('http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion.json')
      .subscribe((data: ChampsData) => {
          this.champsData = data;
          console.log("Retrieved champs data: ", this.champsData);
      })
    console.log("After request data")
  }

  getAatrox(): any {
    const aatroxData = this.champsData?.data?.Aatrox;
    console.log(aatroxData);

    // let list = [0, 1, 2];
    // console.log(list[0])
    // for (let i = 0; i < list.length; i++) {
    //   console.log(list[i]);
    // }

    return aatroxData;
  }

  getChampions(): any[] {
    return Object.values(this.champsData.data)
  }

  public gotToChampDetails(name: string): void {
    this.router.navigate(['champs/' + name])
  }

}


export interface ChampsData {
  type?: string;
  format?: string;
  version?: string;
  data?: any;
}