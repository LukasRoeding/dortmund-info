import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bvb',
  templateUrl: './bvb.component.html',
  styleUrls: ['./bvb.component.css']
})
export class BvbComponent implements OnInit {
/** an array with all the games the bvb plays in the near future */
spieltermine=["May 16, 2020","May 23, 2020","May 26, 2020","May 30, 2020","Jun 6, 2020","Jun 13, 2020",
"Jun 16, 2020","Jun 20, 2020","Jun 27, 2020"]
/** myDate stores the current date. In the html document myDate gets compared to the dates in the array using the date pipe. */
myDate = Date.now();
heute:boolean;
  
  constructor() {}

  ngOnInit(){
    console.log(this.myDate);
    }

  

}
