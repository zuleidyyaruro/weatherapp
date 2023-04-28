import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Weather } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey: string = 'e91b910bed5cbd8d49b26b384c197ded';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather'

  constructor(private http: HttpClient) { }

  getWeather(latitude: number, longitude: number): Observable<Weather | null> {
    const url = `${this.apiUrl}?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`;
    return this.http.get<Weather>(url)
      .pipe(
        catchError(() => of(null))
      )
      ;
  }

}
