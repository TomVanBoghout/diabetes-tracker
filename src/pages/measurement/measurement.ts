import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {DiabetesTrackerService} from "../../providers/diabetes-tracker-service";
import {Observable} from "rxjs";

/*
  Generated class for the Measurement page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-measurement',
  templateUrl: 'measurement.html'
})
export class MeasurementPage {
  week: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dts: DiabetesTrackerService) {
    let now = new Date();
    //this.date = now.getDate() + "-" + (now.getMonth() + 1) + "-" + now.getFullYear();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeasurementPage');
    //this.dts.getToday().subscribe(today => console.log("TODAY!! ", today));
    //this.week = this.dts.getPastWeek();
    console.log("blahh");

  }

}
