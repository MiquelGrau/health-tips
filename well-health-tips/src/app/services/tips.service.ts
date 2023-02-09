import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {switchMap, map, catchError, finalize} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {Observable, of} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TipsService {

  constructor(private http: HttpClient) {}

  public getTipsList(): Observable<any> {
    return this.http.get(environment.api_url + '/tips/random');
  }
}
