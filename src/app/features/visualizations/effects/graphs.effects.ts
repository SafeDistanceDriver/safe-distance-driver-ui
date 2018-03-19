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
      .switchMap(() => this.apiService.getApiResponse()
        .map(data => {
          return new graphsActions.LoadDataSucceeded(data);
        }));
}
