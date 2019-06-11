import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_KEY, BASE_URL} from '../constants/apixu';
import {Observable} from 'rxjs';
import {Weather} from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(q: string, days: number = 7): Observable<Weather> {
    return this.http.get<Weather>(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${q}&days=${days}`);
  }
}
