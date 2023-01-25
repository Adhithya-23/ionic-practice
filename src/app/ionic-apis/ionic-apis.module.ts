import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicApiPageRoutingModule } from './ionic-apis-routing.module';

import { IonicApiPage } from './ionic-apis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicApiPageRoutingModule
  ],
  declarations: [IonicApiPage]
})
export class IonicApiPageModule {}
