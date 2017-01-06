import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DiabetesTrackerService} from "../../providers/diabetes-tracker-service";
import {IDay} from "../../datamodels/day";

/*
  Generated class for the DayInput page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-day-input',
  templateUrl: 'day-input.html'
})
export class DayInputPage {
  private dayId: string;
  private day: IDay;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dts: DiabetesTrackerService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DayInputPage');
    this.dayId = this.navParams.data.$key;
    this.day = <IDay> {
      date: this.navParams.data.date,
      morning: {
        valueInitial: this.navParams.data.morning.valueInitial,
        valueAfter: this.navParams.data.morning.valueAfter,
        treatment: this.navParams.data.morning.treatment,
        treatmentExtra: this.navParams.data.morning.treatmentExtra,
      },
      noon: {
        valueInitial: this.navParams.data.noon.valueInitial,
        valueAfter: this.navParams.data.noon.valueAfter,
        treatment: this.navParams.data.noon.treatment,
        treatmentExtra: this.navParams.data.noon.treatmentExtra,
      },
      evening: {
        valueInitial: this.navParams.data.evening.valueInitial,
        valueAfter: this.navParams.data.evening.valueAfter,
        treatment: this.navParams.data.evening.treatment,
        treatmentExtra: this.navParams.data.evening.treatmentExtra,
      },
      night: {
        valueInitial: this.navParams.data.night.valueInitial,
        valueAfter: this.navParams.data.night.valueAfter,
        treatment: this.navParams.data.night.treatment,
        treatmentExtra: this.navParams.data.night.treatmentExtra,
      }
    };
  }

  saveDay() {
    console.log("Saveday", this.dayId, this.day);
    this.dts.saveDay(this.dayId, this.day).then(() => this.navCtrl.pop());
  }
}
