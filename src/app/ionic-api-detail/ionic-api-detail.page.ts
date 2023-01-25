import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicApiDetailServiceService } from '../ionic-api-detail.service';
import { IonicApi } from '../ionic-apis/ionic-apis.model';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-ionic-api-detail',
  templateUrl: './ionic-api-detail.page.html',
  styleUrls: ['./ionic-api-detail.page.scss'],
})
export class IonicApiDetailPage implements OnInit {
  ionicApi = {} as IonicApi;

  constructor(private activatedRoute: ActivatedRoute, private ionicApiService: IonicApiDetailServiceService,
              public photoService: PhotoService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params=> {
      const apiId = params.get('apiId');
      this.ionicApi = this.ionicApiService.getIonicApiByID(apiId || '');
    });
  }

  addPhotoToGallery() {
   this.photoService.addNewToGallery();
  }
}
