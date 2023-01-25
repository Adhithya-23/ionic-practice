import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicApiDetailPage } from './ionic-api-detail.page';

const routes: Routes = [
  {
    path: '',
    component: IonicApiDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicApiDetailPageRoutingModule {}
