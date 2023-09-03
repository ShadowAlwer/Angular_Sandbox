import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-champ-details',
  templateUrl: './champ-details.component.html',
  styleUrls: ['./champ-details.component.scss']
})
export class ChampDetailsComponent implements OnInit {

  // https://developer.riotgames.com/docs/lol#data-dragon_champions

  // http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion/ + <champId.json>

  public champsDetails: any = null;
  public champId: string = "";
  public passiveName: string = "";
  public spellsName: string = "";

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    console.log(this.activatedRoute.snapshot)
    this.champId = this.activatedRoute.snapshot.params['champId'];

    console.log(this.champId);
  }

  getchampsData(): any[] {
    return this.champsDetails ? Object.values(this.champsDetails.data) : [];
  }

  ngOnInit(): void {
    console.log("Request data")
    this.http.get<any>('http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion/' + this.champId + '.json')
      .subscribe((details: any) => {
          this.champsDetails = details;
          this.passiveName = this.champsDetails.data[this.champId].passive.image.full;
          this.spellsName = this.champsDetails.data[this.champId].spells;

          console.log("Retrieved champs data: ",);
          console.dir(this.champsDetails);
      })
    console.log("After request data")
  }
 


}

/*
for (let index = 0; index < 4; index++) {
  const element = this.champsDetails.data[this.champId].spell[index].image.full;
  
}
*/
