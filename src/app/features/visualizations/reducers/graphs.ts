import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { tassign } from 'tassign';
import { ApiResponse } from '../models';
import * as actions from '../actions/graphs';

export interface State {
  data: ApiResponse[];
}

const initialState: State = {
  data: []
};

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.LOAD_DATA_SUCCEEDED: {
      return tassign(state, { data: action.data });
    }
    case actions.LOAD_DATA_NEWER_THAN_SUCCEEDED: {
      const dataToKeep = state.data.slice(0, state.data.length - action.data.length);
      return tassign(state, { data: [...action.data, ...dataToKeep] });
    }
    default: {
      return state;
    }
  }
}
