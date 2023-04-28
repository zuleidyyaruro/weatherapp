import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather, WeatherOneCall } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-container-weather',
  templateUrl: './container-weather.component.html',
  styleUrls: ['./container-weather.component.css']
})
export class ContainerWeatherComponent implements OnInit {

  public latitude: number = 0;
  public longitude: number = 0;
  public data!: Weather;
  public dataDaily!: WeatherOneCall;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {

    // navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
    //   this.latitude = position.coords.latitude;
    //   this.longitude = position.coords.longitude;
    //   console.log(position)
    // });

    this._weatherService.getInitialWeather().subscribe((res: any) => {
      this.data = res;
    })

    this._weatherService.getWeatherOneCall(4.6097, -74.0817).subscribe((res: any) => {
      this.dataDaily = res;
    })
  }

}
