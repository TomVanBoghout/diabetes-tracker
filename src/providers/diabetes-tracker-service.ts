import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import {Observable} from "rxjs";
import {IDay} from "../datamodels/day";

/*
  Generated class for the DiabetesTrackerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DiabetesTrackerService {
  private _days: FirebaseListObservable<any>;
  private _today: FirebaseObjectObservable<any>;

  constructor(public http: Http, private af: AngularFire) {
    console.log('Hello DiabetesTrackerService Provider');
    //this._days = this.af.database.list('/days2');

  }

  getPastWeek(): Observable<any> {
    return this.af.database.list('/days', {
      query: {
        limitToLast: 7,
        orderByKey: true
    }}).map( (arr) => { return arr.reverse(); } );
  }

  addToday() {
    let now = new Date();
    let date = now.getDate() + "-" + (now.getMonth() + 1) + "-" + now.getFullYear();

    this.af.database.list('days').push(
      {
        date: date,
        morning: {
          "valueInitial": 0,
          "valueAfter": 0,
          "treatment": 0,
          "treatmentExtra": 0
        },
        noon: {
          "valueInitial": 0,
          "valueAfter": 0,
          "treatment": 0,
          "treatmentExtra": 0
        },
        evening: {
          "valueInitial": 0,
          "valueAfter": 0,
          "treatment": 0,
          "treatmentExtra": 0
        },
        night: {
          "valueInitial": 0,
          "valueAfter": 0,
          "treatment": 0,
          "treatmentExtra": 0
        }
      });
  }

  getMeasurements(dayId) {
    return this.af.database.list('/days/' + dayId + '/measurements');
  }

  addMeasurement(dayId, measurement) {
    this.af.database.list('/measurements/' + dayId + '/measurements').push( measurement);
  }
/*
  getMeasurement(date: string) : FirebaseObjectObservable<any> {
    return this.af.database.object('/calendar/' + date);
  }



  initToday(day) {
    console.log("addDay", day);
    let now = new Date();
    let date = now.getDate() + "-" + (now.getMonth() + 1) + "-" + now.getFullYear();

    if (day.date !== date) {
      //add new day => today
      console.log("Add new date: today: " + date);
      this._days.push({
        date: date
      });
    } else {
      this._today = this.af.database.object('days2/' + day.$key);
    }
  }

  getLastDay() {
    this.af.database.list('/days2',  {
      query: {
        limitToLast: 1,
        orderByKey: true
      }}).subscribe(day => {
      if (day && day.length > 0) this.initToday(day[0]);
    });
  }

  getToday() {
    if (!this._today) {
      this._today = this.af.database.object('days2/' + day.$key)
    } ;
    return this._today;
  }
*/
}
