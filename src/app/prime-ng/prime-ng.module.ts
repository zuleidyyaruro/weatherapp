import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// primeng
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SliderModule } from 'primeng/slider';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    SliderModule,
    SidebarModule
  ]
})
export class PrimeNgModule { }
