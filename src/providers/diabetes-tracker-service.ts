import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFire} from "angularfire2";
import {Observable} from "rxjs";

/*
  Generated class for the DiabetesTrackerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DiabetesTrackerService {

  constructor(public http: Http, private af: AngularFire) {
    console.log('Hello DiabetesTrackerService Provider');
  }

  getMeasurement(date: string) : Observable<any> {
    return this.af.database.object('/calendar/' + date);
  }

}
