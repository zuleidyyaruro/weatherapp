import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Weather } from '../../interfaces/weather.interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  public date: Date = new Date();
  public buttonSearch: boolean = false;
  @Input() data!: Weather;
  @Output() onButtonSearchPlaces: EventEmitter<boolean> = new EventEmitter();

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

  searchPlaces() {
    this.buttonSearch = !this.buttonSearch;
    console.log(this.buttonSearch)
    this.onButtonSearchPlaces.emit(this.buttonSearch)
  }

}
