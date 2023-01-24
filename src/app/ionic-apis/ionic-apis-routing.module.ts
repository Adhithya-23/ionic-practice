import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecepiesPage } from './ionic-apis.page';

const routes: Routes = [
  {
    path: '',
    component: RecepiesPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecepiesPageRoutingModule {}
