import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TipsService } from '../../services/tips.service';

@Injectable()
export class TipsEffects {

  loadTips$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Tips List] Load Tips List'),
      mergeMap(() => this.tipsService.getTipsList()
        .pipe(
          map(tips => ({ type: '[Tips List] Sort Loaded Tips List Success', tipsList: tips })),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private tipsService: TipsService
  ) {}
}
