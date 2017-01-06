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

  getLastDays(nrOfDays): Observable<any> {
    return this.af.database.list('/days', {
      query: {
        limitToLast: nrOfDays,
        orderByKey: true
      }}).map( (arr) => { return arr.reverse(); } );
  }

  addToday() {
    let now = new Date();
    let date = now.getDate() + "-" + (now.getMonth() + 1) + "-" + now.getFullYear();

    return this.af.database.list('days').push(
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

  saveDay(dayId, day) {
    return this.af.database.object('/days/' + dayId ).set( day);
  }
}
