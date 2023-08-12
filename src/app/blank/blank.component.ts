import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {

    ngOnInit(): void {
        console.warn('Hello World')
        console.log("Hello Patryk")
        console.log("Hello Alex")
    }

}
