import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geo-location',
  templateUrl: './geo-location.page.html',
  styleUrls: ['./geo-location.page.scss'],
})
export class GeoLocationPage implements OnInit {
  @ViewChild('map', { static: true }) mapRef: ElementRef<HTMLElement> = {} as ElementRef;
  newMap: GoogleMap | undefined;
  coordinate:any = {};

  constructor() {}

  ngOnInit() {
    this.createMap();
    this.printCurrentPosition();
  }

   printCurrentPosition = async () => {
    this.coordinate = await Geolocation.getCurrentPosition();

    console.log('Current position:', this.coordinate);
  };

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: '',
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }
}
