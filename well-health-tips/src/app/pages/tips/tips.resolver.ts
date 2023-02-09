import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { loadTip, loadTips } from '../../state/actions/tip.actions';
import { Store } from '@ngrx/store';
import { selectTipsList } from '../../state/selectors/tips.selectors';
import {take} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TipsListResolver implements Resolve<any> {
  constructor (
    private store: Store<any>,
  ){}

  resolve(route: ActivatedRouteSnapshot): void {
    this.store.select(selectTipsList)
      .pipe(take(1))
      .subscribe(list => {
        console.log(list)
        if (list.length === 0) {
          this.store.dispatch(loadTips());
        }
      })
  }
}

@Injectable({
  providedIn: 'root',
})
export class TipResolver implements Resolve<any> {
  constructor (
    private store: Store<any>
  ){}

  resolve(route: ActivatedRouteSnapshot): void {
    this.store.dispatch(loadTip({ id: route.params['id'] }));
  }
}
