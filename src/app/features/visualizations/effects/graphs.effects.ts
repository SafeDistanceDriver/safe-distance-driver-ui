import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as graphsActions from '../actions/graphs';
import { ApiResponse } from '../models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { ApiService } from '../services/api.service';

@Injectable()
export class GraphsEffects {

  constructor(private actions$: Actions, private apiService: ApiService) { }

  @Effect() loadData$ =
    this.actions$
      .ofType(graphsActions.LOAD_DATA)
      .switchMap(() => this.apiService.getAllData()
        .map(data => {
          return new graphsActions.LoadDataSucceeded(data);
        }));

  @Effect() loadDataNewerThan$ =
    this.actions$
      .ofType(graphsActions.LOAD_DATA_NEWER_THAN)
      .map(action => action as graphsActions.LoadDataNewerThan)
      .map(action => action.id)
      .switchMap((id) => this.apiService.getDataNewerThan(id)
        .map(data => {
          return new graphsActions.LoadDataNewerThanSucceeded(data);
        }));
}
