import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IdleModalComponent } from '../modals/idle-modal/idle-modal.component';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIntime: any;
  expiryTime: any;
  timer: any;
  expiryDateObj:any;
  thresholdObj:any;
  thresholdTime:any;
  currentTime:any;
  modal: any;
  timerInstance:any;
  constructor(
    private modalController: ModalController
  ) {}

  getTimer() {
    clearInterval(this.timerInstance);
    this.loggedIntime = moment(new Date()).format('hh:mm:ss');
    this.expiryDateObj = moment(new Date()).add(5, 'm');
    this.thresholdObj = moment(new Date()).add(1, 'm');
    this.thresholdTime = this.thresholdObj.format('hh:mm:ss');
    this.expiryTime = this.expiryDateObj.format('hh:mm:ss');
    this.timerLogic();
    // Update the count down every 1 second
  }

  timerLogic() {
    var countDownDate = this.expiryDateObj.toDate().getTime();
    this.timerInstance = setInterval(() => {
      // Get today's date and time
      var now = new Date().getTime();
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      const nowTimeee = moment(new Date());
      this.currentTime = nowTimeee.format('hh:mm:ss');
      const nowMoment = nowTimeee.format('hh:mm:ss') == this.thresholdObj.format('hh:mm:ss');
      if(nowMoment) {
        this.openModal();
        clearInterval(this.timerInstance);
      }
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Display the result in the element with id="demo"
      this.timer = hours + 'h ' + minutes + 'm ' + seconds + 's ';
      // If the count down is finished, write some text
      if (distance <= 0) {
        clearInterval(this.timerInstance);
        this.timer = '0h 0m 0s'
      }
    }, 1000);
  }

  async openModal() {
    const remainingTime = this.expiryDateObj.diff(this.thresholdObj);
    const modal = await this.modalController.create({
      component: IdleModalComponent,
      cssClass: 'modal-size',
    });
    modal.present();
  }
}
