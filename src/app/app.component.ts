import { Component } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import {Observable } from 'rxjs/Observable';

const TOWNS_URL = "https://islandline-1479311803890.firebaseio.com/towns.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  towns: Observable<any>;

  constructor(private http: HttpClient){
    this.towns = this.http.get(TOWNS_URL);
    console.log(this.towns);
  }
}
