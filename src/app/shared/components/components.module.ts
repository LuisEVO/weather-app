import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherForecastDayComponent } from './weather-forecast-day/weather-forecast-day.component';
import { WeatherCurrentComponent } from './weather-current/weather-current.component';

@NgModule({
  declarations: [
    WeatherForecastDayComponent,
    WeatherCurrentComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherForecastDayComponent,
    WeatherCurrentComponent,
  ]
})
export class ComponentsModule { }
