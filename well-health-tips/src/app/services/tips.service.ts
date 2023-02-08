import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {switchMap, map, catchError, finalize} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {of} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TipsService {

  constructor(private http: HttpClient) {}

  public async getTipsList(): Promise<any> {
    return await new Promise((resolve, reject) => {
      this.http.get(environment.api_url + '/tips/random').pipe(finalize(() => {})).subscribe(res => {
        if (res) {
          resolve(res);
        } else {
          reject();
        }
      });
    })
    // createEffect(() =>
    //   this.actions$.pipe(
    //     ofType(fromActions.loadCarsData),
    //     switchMap(() =>
    //       this.http.get<any[]>(environment.api_url + '/tips/random').pipe(
    //         map(data => fromActions.loadCarsDataSuccess({ data })),
    //         catchError(error => of(fromActions.loadCarsDataFailure({ error })))
    //       )
    //     )
    //   )
    // );
  }
}
