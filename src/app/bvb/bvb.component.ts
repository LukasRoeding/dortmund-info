import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bvb',
  templateUrl: './bvb.component.html',
  styleUrls: ['./bvb.component.css']
})
export class BvbComponent implements OnInit {
/** an array with all the games the bvb plays in the near future */
spieltermine=["Sep 11, 2020"]
/** myDate stores the current date. In the html document myDate gets compared to the dates in the array using the date pipe. */
myDate = Date.now();
heute:boolean;
  
  constructor() {}

  ngOnInit(){
    console.log(this.myDate);
    }

  

}
