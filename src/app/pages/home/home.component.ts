import { Component, OnInit } from '@angular/core';
import {ApixuService} from '../../core/services/apixu.service';
import {Weather} from '../../core/models/weather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  q: string;
  weather: Weather;
  state: string;

  constructor(private apixu: ApixuService) { }

  ngOnInit() {
    this.q = 'Lima';
    this.search();
  }

  search() {
    this.weather = null;
    this.state = 'loading ...';
    this.apixu.getWeather(this.q)
      .subscribe(
        (res: Weather) => {
          this.state = null;
          this.weather = res;
        },
        (err: any) => {
          console.log(err);
          this.state = err.error.error.message;
        }
      );
  }

}
