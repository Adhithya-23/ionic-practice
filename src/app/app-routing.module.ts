import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ionic-apis',
    pathMatch: 'full',
  },
  {
    path: 'ionic-apis',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./ionic-apis/ionic-apis.module').then(
            (m) => m.RecepiesPageModule
          ),
      },
      {
        path: ':apiId',
        loadChildren: () =>
          import('./ionic-api-detail/ionic-api-detail.module').then(
            (m) => m.RecepieDetailPageModule
          ),
      },
    ],
  },
  {
    path: 'geo-location',
    loadChildren: () => import('./geo-location/geo-location.module').then( m => m.GeoLocationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
