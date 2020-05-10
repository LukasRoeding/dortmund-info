import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phoenixsee',
  templateUrl: './phoenixsee.component.html',
  styleUrls: ['./phoenixsee.component.css']
})
export class PhoenixseeComponent implements OnInit {
  url="https://lamp01.dortmund.de/webcams/phoenix2/current.jpg?counter="

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.url=this.url + Date.now();
    },
      1000);

    
  }


}
