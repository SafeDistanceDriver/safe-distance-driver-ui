import { Action } from '@ngrx/store';
import { ApiResponse } from '../models';

export const LOAD_DATA = '[Graphs] Load Data';
export class LoadData implements Action {
  readonly type = LOAD_DATA;
  constructor() { }
}

export const LOAD_DATA_SUCCEEDED = '[Graphs] Load Data Succeeded';
export class LoadDataSucceeded implements Action {
  readonly type = LOAD_DATA_SUCCEEDED;
  constructor(public data: ApiResponse[]) { }
}

export type All = LoadData |
  LoadDataSucceeded;
