import { Action } from '@ngrx/store';

export const SET_MESSAGE = '[Rating] Set Message';
export class SetMessage implements Action {
  readonly type = SET_MESSAGE;
  constructor(public message: string) { }
}

export type All = SetMessage;
