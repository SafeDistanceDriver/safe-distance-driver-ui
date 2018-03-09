import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as graphsActions from '../actions/graphs';
import { ApiResponse } from '../models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class GraphsEffects {

  constructor(private actions$: Actions) { }

  @Effect() loadData$ =
    this.actions$
      .ofType(graphsActions.LOAD_DATA)
      .mergeMap(() => [
        new graphsActions.LoadDataSucceeded(this.getTestData())
      ]);

  id = 1;
  getTestData(): ApiResponse[] {
    const now = new Date();
    let testData: ApiResponse[] = [];
    for (let i = 0; i < 30; i++) {
      const testDataPoint: ApiResponse = {
        id: this.id++,
        date: this.getDatePlusSeconds(now, i),
        speed: this.getRandomNumber(60, 65),
        distance: this.getRandomNumber(3, 6)
      };
      testData = [...testData, testDataPoint];
    }
    return testData;
  }

  getDatePlusSeconds(date: Date, seconds: number) {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds() + seconds);
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
