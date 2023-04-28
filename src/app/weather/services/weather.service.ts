import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Weather, WeatherOneCall } from '../interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey: string = 'e91b910bed5cbd8d49b26b384c197ded';
  private apiUrl = 'https://api.openweathermap.org/data/2.5'

  constructor(private http: HttpClient) { }

  getInitialWeather(): Observable<Weather | null> {
    const url = `${this.apiUrl}/weather?q=bogota&appid=${this.apiKey}&units=Metric`;
    return this.http.get<Weather>(url)
      .pipe(
        catchError(() => of(null))
      )
  }

  getWeatherOneCall(latitude: number, longitude: number): Observable<WeatherOneCall | null> {
    const url = `${this.apiUrl}/onecall?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=Metric`;
    return this.http.get<WeatherOneCall>(url)
      .pipe(
        catchError(() => of(null))
      )
  }

  getWeather(latitude: number, longitude: number): Observable<Weather | null> {
    const url = `${this.apiUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=Metric`;
    return this.http.get<Weather>(url)
      .pipe(
        catchError(() => of(null))
      )
  }

}
