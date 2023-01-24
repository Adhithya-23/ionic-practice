import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecepieDetailServiceService } from '../ionic-api-detail.service';
import { Recepie } from '../ionic-apis/ionic-apis.model';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './ionic-api-detail.page.html',
  styleUrls: ['./ionic-api-detail.page.scss'],
})
export class RecepieDetailPage implements OnInit {
  recepie = {} as Recepie;

  constructor(private activatedRoute: ActivatedRoute, private recepieService: RecepieDetailServiceService,
              public photoService: PhotoService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params=> {
      const apiId = params.get('apiId');
      this.recepie = this.recepieService.getRecepieByID(apiId || '');
    });
  }

  addPhotoToGallery() {
   this.photoService.addNewToGallery();
  }
}
