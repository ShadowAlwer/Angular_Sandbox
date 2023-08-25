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

  public champsDetails: any = null;
  public champId: string = "";
  public passiveName: string = "";

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    console.log(this.activatedRoute.snapshot)
    this.champId = this.activatedRoute.snapshot.params['champId'];
    // this.champId = 'Ashe' 
    console.log(this.champId);
  }

  ngOnInit(): void {
    console.log("Request data")
    this.http.get<any>('http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion/' + this.champId + '.json')
      .subscribe((details: any) => {
          this.champsDetails = details;
          this.passiveName = this.champsDetails.data[this.champId].passive.image.full;
                            // this.champsData.data.Ahri.passive.image.full;
                            // this.champsDetails.data[this.champId].spell[0]
                            // let index = 2;
                            // index++
                            // for (let index = 0; index < 4; index++ ) {
                            //    this.champsDetails.data[this.champId].spell[index].description
                            // }
          console.log("Retrieved champs data: ",);
          console.dir(this.champsDetails);
      })
    console.log("After request data")
  }
 


}
