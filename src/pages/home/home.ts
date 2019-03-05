import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openUlsterPage() {
    this.navCtrl.push('UlsterPage');
  }

  openMunsterPage() {
    this.navCtrl.push('MunsterPage');
  }

  openConnaughtPage() {
    this.navCtrl.push('ConnaughtPage');
  }

  openLeinsterPage() {
    this.navCtrl.push('LeinsterPage');
  }

}
