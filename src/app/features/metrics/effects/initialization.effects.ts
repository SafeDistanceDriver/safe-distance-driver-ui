import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as appActions from '../../../actions';
import * as ratingActions from '../actions/rating';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class MetricsInitializationEffects {

  constructor(private actions$: Actions) { }

  @Effect() initialize$ =
    this.actions$
      .ofType(appActions.APP_INIT)
      .mergeMap(() => [
        new ratingActions.SetMessage('Good')
      ]);
}
