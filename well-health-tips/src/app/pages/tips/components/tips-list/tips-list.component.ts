import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectLoading, selectSorted, selectTipsList} from '../../../../state/selectors/tips.selectors';
import {TipModel, TipType} from '../../../../core/models/tip.interface';
import {Router} from '@angular/router';
import { selectTip } from 'src/app/state/actions/tip.actions';

@Component({
  selector: 'app-tips-list',
  templateUrl: './tips-list.component.html',
  styleUrls: ['./tips-list.component.scss']
})
export class TipsListComponent implements OnInit {
  loading$: Observable<boolean> = new Observable<boolean>();
  sorted$: Observable<boolean> = new Observable<boolean>();
  tipsList$: Observable<TipModel[]> = new Observable<TipModel[]>();

  today = new Date();
  thisWeek = new Date();

  todayTips: TipModel[] = [];
  thisWeekTips: TipModel[] = [];
  earlierTips: TipModel[] = [];

  constructor(
    private store: Store<any>,
    private router: Router
  ) {
    this.thisWeek.setDate(this.thisWeek.getDate() - 7);
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.tipsList$ = this.store.select(selectTipsList);
    this.sorted$ = this.store.select(selectSorted);

    this.tipsList$.subscribe(tips => {
      this.todayTips = tips.filter(tip => this.getDateTimeGroup(tip) === 'today');
      this.thisWeekTips = tips.filter(tip => this.getDateTimeGroup(tip) === 'week');
      this.earlierTips = tips.filter(tip => this.getDateTimeGroup(tip) === 'earlier');
    })
  }

  selectTip(tip: TipModel): void {
    this.store.dispatch(selectTip({ tip: tip }));
    this.router.navigate(['/detail', tip.id]);
  }

  getDateTimeGroup(tip: TipModel): string {
    if (new Date(tip.datetime) === this.today) {
      return 'today';
    }
    if (new Date(tip.datetime) > this.thisWeek && new Date(tip.datetime) < this.today) {
      return 'week';
    }
    if (new Date(tip.datetime) < this.thisWeek) {
      return 'earlier';
    }
    return 'earlier';
  }

}
