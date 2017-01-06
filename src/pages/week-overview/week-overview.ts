import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {DiabetesTrackerService} from "../../providers/diabetes-tracker-service";
import {FirebaseListObservable} from "angularfire2";
import {Observable} from "rxjs";
import {IDay} from "../../datamodels/day";

/*
  Generated class for the WeekOverview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-week-overview',
  templateUrl: 'week-overview.html'
})
export class WeekOverviewPage {
  week: Observable<any>;
  week2: IDay[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dts: DiabetesTrackerService,
              private _loadingController: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeekOverviewPage');
    let loader = this._loadingController.create({
      content: 'Getting data'
    });

    loader.present().then(() => {
      this.week = this.dts.getPastWeek();
      this.week.subscribe(() => loader.dismiss());
    });


  }

  addToday() {
    this.dts.addToday();
  }

  addMeasurement(day) {
    this.dts.addMeasurement(day.$key, {
      "time": "morning",
      "valueInitial": 105,
      "valueAfter": 115,
      "treatment": 20,
      "treatmentExtra": 0
    });
  }

}
