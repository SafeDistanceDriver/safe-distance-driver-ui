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

export const LOAD_DATA_NEWER_THAN = '[Graphs] Load Data Newer Than';
export class LoadDataNewerThan implements Action {
  readonly type = LOAD_DATA_NEWER_THAN;
  constructor(public id: number) { }
}

export const LOAD_DATA_NEWER_THAN_SUCCEEDED = '[Graphs] Load Data Newer Than Succeeded';
export class LoadDataNewerThanSucceeded implements Action {
  readonly type = LOAD_DATA_NEWER_THAN_SUCCEEDED;
  constructor(public data: ApiResponse[]) { }
}

export type All = LoadData |
  LoadDataSucceeded |
  LoadDataNewerThan |
  LoadDataNewerThanSucceeded;
