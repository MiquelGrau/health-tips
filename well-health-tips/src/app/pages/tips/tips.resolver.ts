import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {TipsService} from '../../services/tips.service';

@Injectable({
  providedIn: 'root',
})
export class TipsListResolver implements Resolve<any> {
  constructor (private tipsService: TipsService){}

  resolve(route: ActivatedRouteSnapshot) {
    return this.tipsService.getTipsList();
  }
}
