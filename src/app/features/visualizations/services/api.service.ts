import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';
import { ApiResponse } from '../models';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getApiResponse(): Observable<ApiResponse[]> {
    return this.http.get<ApiResponse[]>(environment.urls.stats);
  }
}
