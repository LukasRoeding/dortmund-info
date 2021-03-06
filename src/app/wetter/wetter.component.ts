import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Component({
  selector: 'app-wetter',
  templateUrl: './wetter.component.html',
  styleUrls: ['./wetter.component.css']
})
export class WetterComponent implements OnInit {
  items=[];
  wolkenitems=[];
  /** the current weather of dortmund gets fetched with this api call. lat and lon are the center of dortmund. 
   * data.main is an object which has all the important current teamperature/humidity data.
   * data.weather has data about the current weater. items stores the temperature and humidity, and wolkenitem stores data about the weather/clouds.)*/
  constructor(private http: HttpClient) {
    this.http.get<Post>('https://api.openweathermap.org/data/2.5/weather?lat=51.514244&lon=7.468429&appid=0ae63e00c6a83f5915a5bf44c0c6b960').toPromise().then
    (data => {for (let key in data.main)
    if (data.main.hasOwnProperty(key))
      this.items.push(Math.round(data.main[key])); for (let key2 in data.weather[0])
      if (data.weather[0].hasOwnProperty(key2))
        this.wolkenitems.push(data.weather[0][key2]);
    });
   
   }

  ngOnInit() {  


}

  }







