import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {loadedTips, loadTips} from '../../../../state/actions/tip.actions';
import {Observable} from 'rxjs';
import {selectLoading} from '../../../../state/selectors/tips.selectors';
import {TipsService} from '../../../../services/tips.service';

@Component({
  selector: 'app-tips-list',
  templateUrl: './tips-list.component.html',
  styleUrls: ['./tips-list.component.scss']
})
export class TipsListComponent implements OnInit {
  loading$: Observable<boolean> = new Observable<boolean>();

  constructor(
    private store: Store<any>,
    private tipsService: TipsService
  ) {
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);

    this.store.dispatch(loadTips());

    this.tipsService.getTipsList().then(res => {
      this.store.dispatch(loadedTips(
        {tipsList: res}
      ));
    });

  }

}
