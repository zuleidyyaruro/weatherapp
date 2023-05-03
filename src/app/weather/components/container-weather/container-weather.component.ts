import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather, WeatherOneCall } from '../../interfaces/weather.interface';
import { switchMap } from 'rxjs/operators';

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
  public sidebarVisible: boolean = false;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit(): void {

    // navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
    //   this.latitude = position.coords.latitude;
    //   this.longitude = position.coords.longitude;
    //   console.log(position)
    // });

    this._weatherService.getInitialWeather().subscribe((res: any) => {
      console.log(res)
      this.data = res;
    })

    this._weatherService.getWeatherOneCall(4.6097, -74.0817).subscribe((res: any) => {
      console.log(res)
      this.dataDaily = res;
    })
  }

  searchPlaces(event: boolean) {
    this.sidebarVisible = event;
  }

  searchLocation(event: string) {
    this._weatherService.getWeatherByLocation(event).subscribe((res: any) => {
      this.data = res;
      this.longitude = this.data.coord.lon;
      this.latitude = this.data.coord.lat;

      this._weatherService.getWeatherOneCall(this.latitude, this.longitude).subscribe((res: any) => {
        this.dataDaily = res
      })
    })

  }

}
