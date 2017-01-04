import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  calendar: FirebaseObjectObservable<any>;

  constructor(private navCtrl: NavController, af: AngularFire) {
    this.calendar = af.database.object('/calendar/2017-01-04');
    console.log(this.calendar);
  }

}
