import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';
import { ApiResponse } from '../models';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllData(): Observable<ApiResponse[]> {
    return this.http.get<ApiResponse[]>(environment.urls.stats);
  }

  getDataNewerThan(id: number): Observable<ApiResponse[]> {
    const url = `${environment.urls.newerThan}${id}`;
    return this.http.get<ApiResponse[]>(url);
  }
}
