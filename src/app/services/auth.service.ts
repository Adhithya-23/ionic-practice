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
  expiryDateObj: any;
  thresholdObj: any;
  thresholdTime: any;
  currentTime: any;
  modal: any;
  timerInstance: any;
  constructor(private modalController: ModalController) {}

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
    this.timerInstance = setInterval(() => {
      // Get today's date and time
      const now = moment(new Date());
      this.currentTime = now.format('hh:mm:ss');
      // Find the distance between now and the count down date
      const isTimeExpired = now.format('hh:mm:ss') == this.thresholdObj.format('hh:mm:ss');
      if (isTimeExpired) {
        this.openModal();
        clearInterval(this.timerInstance);
      }
      // Time calculations for days, hours, minutes and seconds
      const timeDiff = this.expiryDateObj.diff(now);
      const duration =  moment.duration(timeDiff);
      var hours = duration.hours();
      var minutes = duration.minutes();
      var seconds = duration.seconds();
      // Display the result in the element with id="demo"
      this.timer = hours + 'h ' + minutes + 'm ' + seconds + 's ';
      // If the count down is finished, write some text
      if (this.expiryDateObj.diff(now) <= 0) {
        clearInterval(this.timerInstance);
        this.timer = '0h 0m 0s';
      }
    }, 1000);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: IdleModalComponent,
      cssClass: 'modal-size',
    });
    modal.present();
  }
}
