import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-idle-modal',
  templateUrl: './idle-modal.component.html',
  styleUrls: ['./idle-modal.component.scss'],
})
export class IdleModalComponent implements OnInit {
  @Input() expiryAt:any;
  time:any;
  constructor(private modalController: ModalController, public authService: AuthService) { }

  ngOnInit() {
    console.log(this.expiryAt);
    this.authService.timerLogic();
  }

  extend() {
    this.modalController.dismiss(null, 'cancel');
    this.authService.getTimer();
  }

  logout() {

  }

}
