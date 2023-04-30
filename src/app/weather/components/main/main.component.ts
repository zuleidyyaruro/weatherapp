import { Component, Input, OnInit } from '@angular/core';
import { WeatherOneCall } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public date: Date = new Date();
  public date1: number = 0
  public date2: number = 0
  public date3: number = 0
  public date4: number = 0;
  public humidity: number = 0;
  @Input() dataDaily!: WeatherOneCall;


  ngOnInit(): void {
    this.date1 = this.date.setDate(this.date.getDate() + 2);
    this.date2 = this.date.setDate(this.date.getDate() + 1);
    this.date3 = this.date.setDate(this.date.getDate() + 1);
    this.date4 = this.date.setDate(this.date.getDate() + 1);
    this.humidity = this.dataDaily.current.humidity;
  }

  chooseImage(typeIcon: string) {
    let src: string = '';

    switch (typeIcon) {
      case "04n":
        src = '../../../../assets/images/HeavyCloud.png';
        break;
      case "01n":
        src = '../../../../assets/images/Clear.png';
        break;
      case "02d":
        src = '../../../../assets/images/HeavyCloud.png';
        break;
      case "10d":
        src = '../../../../assets/images/LightRain.png';
        break;
      case "04d":
        src = '../../../../assets/images/HeavyCloud.png';
        break;
    }
    return src;
  }

  windOrientation(orientation: number): string {
    return `transform: rotate(${orientation}deg)`
  }


}
