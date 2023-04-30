import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ContainerWeatherComponent } from './components/container-weather/container-weather.component';
import { AsideComponent } from './components/aside/aside.component';
import { MainComponent } from './components/main/main.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { FormsModule } from '@angular/forms';
import { CardDailyComponent } from './components/card-daily/card-daily.component';
import { SidebarComponent } from './components/sidebar/sidebar.component'


@NgModule({
  declarations: [
    ContainerWeatherComponent,
    AsideComponent,
    MainComponent,
    CardDailyComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    PrimeNgModule
  ],
  exports: [
    ContainerWeatherComponent,
    AsideComponent,
    MainComponent
  ]
})
export class WeatherModule { }
