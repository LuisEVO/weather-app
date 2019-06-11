import {Component, Input, OnInit} from '@angular/core';
import {Current} from '../../../core/models/weather';

@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.scss']
})
export class WeatherCurrentComponent implements OnInit {
  @Input() location: Location;
  @Input() current: Current;

  constructor() { }

  ngOnInit() {
  }

}
