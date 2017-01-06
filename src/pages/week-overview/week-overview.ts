import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {DiabetesTrackerService} from "../../providers/diabetes-tracker-service";
import {FirebaseListObservable} from "angularfire2";
import {Observable} from "rxjs";
import {IDay} from "../../datamodels/day";
import {DayInputPage} from "../day-input/day-input";

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
      this.week = this.dts.getLastDays(7);
      this.week.subscribe(() => loader.dismiss());
    });


  }

  navToDayInput(day) {
    console.log("navigate to day input: ", day);
    this.navCtrl.push(DayInputPage, day);
  }

  addToday() {
    this.dts.addToday();
  }


}
