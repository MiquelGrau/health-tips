import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { loadTips } from '../../state/actions/tip.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class TipsListResolver implements Resolve<any> {
  constructor (
    private store: Store<any>,
  ){}

  resolve(route: ActivatedRouteSnapshot): void {
    this.store.dispatch(loadTips());
  }
}
