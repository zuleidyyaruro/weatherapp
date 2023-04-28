import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-container-weather',
  templateUrl: './container-weather.component.html',
  styleUrls: ['./container-weather.component.css']
})
export class ContainerWeatherComponent implements OnInit {

  public latitude: number = 0;
  public longitude: number = 0;
  public data: any;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });

    this._weatherService.getWeather(this.latitude, this.longitude).subscribe(res => {
      this.data = res;
    })
  }

}
