import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';

@Component({
  selector: 'app-openweather',
  templateUrl: './openweather.page.html',
  styleUrls: ['./openweather.page.scss'],
})

 export class OpenweatherPage implements OnInit {
  city:string;
  apiKey="46ab1424d0eb1ddd7d704d71fd9273c2";
  constructor() { }

  ngOnInit() {
  }

}
