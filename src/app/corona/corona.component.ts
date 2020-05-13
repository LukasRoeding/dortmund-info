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
jamoin = 0;
  constructor(private http: HttpClient) { 
    this.http.get<Post2>('https://www.trackcorona.live/api/cities/dortmund').toPromise().then(data => {
      console.log(data.data[this.jamoin]);
      this.items.push(data.data[this.jamoin]);
    
  });}

  ngOnInit(): void {
    console.log(this.items)
  }

}
