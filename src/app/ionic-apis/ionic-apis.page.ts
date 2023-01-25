import { Component, OnInit } from '@angular/core';
import { IonicApiDetailServiceService } from '../ionic-api-detail.service';
import { AuthService } from '../services/auth.service';
import { IonicApi } from './ionic-apis.model';

@Component({
  selector: 'app-ionic-apis',
  templateUrl: './ionic-apis.page.html',
  styleUrls: ['./ionic-apis.page.scss'],
})
export class IonicApiPage implements OnInit {
  ionicApis: IonicApi[] = [];
  constructor(private ionicApiservice: IonicApiDetailServiceService,
              public authService: AuthService) {}

  ngOnInit() {
    this.ionicApis = this.ionicApiservice.getIonicApis();
    this.authService.getTimer();
  }
}
