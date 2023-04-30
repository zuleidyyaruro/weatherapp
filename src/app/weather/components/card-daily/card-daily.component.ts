import { Component, Input } from '@angular/core';
import { WeatherOneCall } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-card-daily',
  templateUrl: './card-daily.component.html',
  styleUrls: ['./card-daily.component.css']
})
export class CardDailyComponent {

  @Input() dataDaily!: WeatherOneCall;
  @Input() date!: number | string;


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

}
