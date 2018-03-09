import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as appActions from '../../../actions';
import * as graphsActions from '../actions/graphs';

@Injectable()
export class VisualizationsInitializationEffects {

  constructor(private actions$: Actions) { }

  @Effect() initialize$ =
    this.actions$
      .ofType(appActions.APP_INIT)
      .mergeMap(() => [
        new graphsActions.LoadData()
      ]);
}
