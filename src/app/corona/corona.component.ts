import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post2} from './post'


@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {
items=[];
key:object;
IndexOfCoronaArray = 0;
  constructor(private http: HttpClient) { 
    /** data is fetched from the corona api. this data has a data array. The first index of the data array has the number of infections and
     * the number people that died from covid-19. The data is then stored in items to then get called in the html document.
     */
    this.http.get<Post2>('https://www.trackcorona.live/api/cities/dortmund').toPromise().then(data => {
      console.log(data.data[this.IndexOfCoronaArray]);
      this.items.push(data.data[this.IndexOfCoronaArray]);
    
  });}

  ngOnInit(): void {
    console.log(this.items)
  }

}
