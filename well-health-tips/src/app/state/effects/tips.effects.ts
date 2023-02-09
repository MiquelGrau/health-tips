import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import { TipsService } from '../../services/tips.service';

@Injectable()
export class TipsEffects {

  loadTips$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Tips List] Load Tips List'),
      switchMap(() => this.tipsService.getTipsList()
        .pipe(
          tap(tips => ({ type: '[Tips List] Loaded Tips List Success', tipsList: tips })),
          map(tips => ({ type: '[Tips List] Sort Loaded Tips List Success', tipsList: tips })),
          catchError(() => EMPTY)
        )
      ),
    )
  );

  loadTip$ = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: '[Tip Details] Load Tip', id: string }>('[Tip Details] Load Tip'),
      mergeMap((action) => this.tipsService.getTip(action.id)
        .pipe(
          map(tip => ({ type: '[Tip Details] Loaded Tip Success', tip: tip })),
          catchError(() => EMPTY)
        )
      ),
    )
  );

  upVoteTip$ = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: '[Tip Detail] Tip UpVote', id: number }>('[Tip Detail] Tip UpVote'),
      mergeMap((action) => this.tipsService.upVoteTip(action.id)
        .pipe(
          map(tip => ({ type: '[Tip Details] UpVoted Tip Success', tip: tip })),
          catchError(() => EMPTY)
        )
      ),
    )
  );

  downVoteTip$ = createEffect(() =>
    this.actions$.pipe(
      ofType<{ type: '[Tip Detail] Tip DownVote', id: number }>('[Tip Detail] Tip DownVote'),
      mergeMap((action) => this.tipsService.downVoteTip(action.id)
        .pipe(
          map(tip => ({ type: '[Tip Details] DownVoted Tip Success', tip: tip })),
          catchError(() => EMPTY)
        )
      ),
    )
  );

  constructor(
    private actions$: Actions,
    private tipsService: TipsService
  ) {}
}
