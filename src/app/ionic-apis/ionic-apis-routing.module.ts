import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicApiPage } from './ionic-apis.page';

const routes: Routes = [
  {
    path: '',
    component: IonicApiPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicApiPageRoutingModule {}
