import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicApiDetailPageRoutingModule } from './ionic-api-detail-routing.module';

import { IonicApiDetailPage } from './ionic-api-detail.page';
import { GeoLocationPageModule } from '../geo-location/geo-location.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicApiDetailPageRoutingModule,
    GeoLocationPageModule
  ],
  declarations: [IonicApiDetailPage]
})
export class IonicDetailPageModule {}
