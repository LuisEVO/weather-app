import {Component, Input, OnInit} from '@angular/core';
import {ForecastDay} from '../../../core/models/weather';

@Component({
  selector: 'app-weather-forecast-day',
  templateUrl: './weather-forecast-day.component.html',
  styleUrls: ['./weather-forecast-day.component.scss']
})
export class WeatherForecastDayComponent implements OnInit {
  @Input() forecastDay: ForecastDay;
  constructor() { }

  ngOnInit() {
  }

}
