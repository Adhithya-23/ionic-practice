import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecepieDetailPageRoutingModule } from './ionic-api-detail-routing.module';

import { RecepieDetailPage } from './ionic-api-detail.page';
import { GeoLocationPageModule } from '../geo-location/geo-location.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecepieDetailPageRoutingModule,
    GeoLocationPageModule
  ],
  declarations: [RecepieDetailPage]
})
export class RecepieDetailPageModule {}
