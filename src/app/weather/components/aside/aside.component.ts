import { Component, Input } from '@angular/core';
import { Weather } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  public date: Date = new Date()
  @Input() data!: Weather;

  chooseImage(typeIcon: string) {
    console.log(typeIcon)
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
