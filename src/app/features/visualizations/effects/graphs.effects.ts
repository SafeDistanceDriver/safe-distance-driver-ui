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
        new graphsActions.LoadDataSucceeded(this.testData)
      ]);

  testData: ApiResponse[] = [
    {
      id: 1,
      date: new Date(2018, 3, 9, 15, 45, 1),
      speed: 65,
      distance: 5
    },
    {
      id: 2,
      date: new Date(2018, 3, 9, 15, 45, 2),
      speed: 64.5,
      distance: 4.5
    },
    {
      id: 3,
      date: new Date(2018, 3, 9, 15, 45, 3),
      speed: 65,
      distance: 4.75
    },
    {
      id: 4,
      date: new Date(2018, 3, 9, 15, 45, 4),
      speed: 65,
      distance: 5.25
    },
    {
      id: 5,
      date: new Date(2018, 3, 9, 15, 45, 5),
      speed: 65.5,
      distance: 5.5
    },
    {
      id: 6,
      date: new Date(2018, 3, 9, 15, 45, 6),
      speed: 66,
      distance: 5.5
    },
    {
      id: 7,
      date: new Date(2018, 3, 9, 15, 45, 7),
      speed: 66.5,
      distance: 5.75
    },
    {
      id: 8,
      date: new Date(2018, 3, 9, 15, 45, 8),
      speed: 67,
      distance: 5.5
    },
    {
      id: 9,
      date: new Date(2018, 3, 9, 15, 45, 9),
      speed: 67.5,
      distance: 5
    },
    {
      id: 10,
      date: new Date(2018, 3, 9, 15, 45, 10),
      speed: 67,
      distance: 5.25
    }
  ];
}
