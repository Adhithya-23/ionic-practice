import { Injectable } from '@angular/core';
import { Recepie } from './ionic-apis/ionic-apis.model';

@Injectable({
  providedIn: 'root',
})
export class RecepieDetailServiceService {
  recepie: Recepie[] = [
    {
      id: '1',
      title: 'Camera',
      imageUrl:
        'https://seedandspark-static.s3.us-east-2.amazonaws.com/uploads/767864/1612863183-chamera.gif',
      specifications: ['12 MP', '1.6 Focal Length'],
    },
    {
      id: '2',
      title: 'Geo Location',
      imageUrl:
        'https://geoawesomeness.com/wp-content/uploads/2022/03/google-maps-logo-1024x576.jpg',
      specifications: ['Google Maps', 'Coordinate'],
    },
  ];
  constructor() {}

  getRecepies() {
    return [...this.recepie];
  }

  getRecepieByID(id: string): Recepie {
    return this.recepie.find((item) => item.id == id) || ({} as Recepie);
  }
}
