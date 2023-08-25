import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-champ-details',
  templateUrl: './champ-details.component.html',
  styleUrls: ['./champ-details.component.scss']
})
export class ChampDetailsComponent implements OnInit {

  // https://developer.riotgames.com/docs/lol#data-dragon_champions

  // http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion/ + <champId.json>

  public champsData: any = {};
  public champId: string = "";
  public passiveName: string = "";

  ngOnInit(): void {
    console.log("Request data")
    this.http.get<any>('http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion/' + this.champId + '.json')
      .subscribe((data: any) => {
          this.champsData = data;
          console.log("Retrieved champs data: ", this.champsData);
      })
    console.log("After request data")
  }

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    
    console.log(this.activatedRoute.snapshot)
    this.champId = this.activatedRoute.snapshot.params['champId'];
    console.log(this.champId);

    console.log(this.activatedRoute.snapshot)
    this.passiveName = this.activatedRoute.snapshot.params['passiveName'];
    console.log(this.passiveName);

  }
}
