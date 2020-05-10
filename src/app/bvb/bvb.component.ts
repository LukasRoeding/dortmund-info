import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bvb',
  templateUrl: './bvb.component.html',
  styleUrls: ['./bvb.component.css']
})
export class BvbComponent implements OnInit {
spieltermine=["May 16, 2020","May 23, 2020","May 26, 2020","May 30, 2020","June 6, 2020","June 13, 2020",
"June 16, 2020","June 20, 2020","June 27, 2020"]
myDate = Date.now();
heute:boolean;
  
  constructor() {}

  ngOnInit(){
    console.log(this.myDate);
    }

  

}
