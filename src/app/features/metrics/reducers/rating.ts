import { tassign } from 'tassign';
import * as actions from '../actions/rating';

export interface State {
  message: string;
}

export const initialState: State = {
  message: ''
};

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.SET_MESSAGE: {
      return tassign(state, { message: action.message });
    }
    default: {
      return state;
    }
  }
}
