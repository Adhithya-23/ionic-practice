import { Component, OnInit } from '@angular/core';
import { RecepieDetailServiceService } from '../ionic-api-detail.service';
import { AuthService } from '../services/auth.service';
import { Recepie } from './ionic-apis.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './ionic-apis.page.html',
  styleUrls: ['./ionic-apis.page.scss'],
})
export class RecepiesPage implements OnInit {
  recepies: Recepie[] = [];
  constructor(private recepieService: RecepieDetailServiceService,
              public authService: AuthService) {}

  ngOnInit() {
    this.recepies = this.recepieService.getRecepies();
    this.authService.getTimer();
  }
}
