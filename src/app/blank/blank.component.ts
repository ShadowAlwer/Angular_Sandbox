import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {

    ngOnInit(): void {}
    doSomething() {
      const paragraph = document.getElementById("test") as HTMLElement;
      paragraph.innerHTML = "WORLD";
    }

    count=0;
    counter(type:string)
    {
      type==='add'?this.count++:this.count--
    }
}
