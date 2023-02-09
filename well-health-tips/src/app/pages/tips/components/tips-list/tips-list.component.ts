import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectLoading, selectTipsList} from '../../../../state/selectors/tips.selectors';
import {TipModel, TipType} from '../../../../core/models/tip.interface';
import {sortLoadedTips} from '../../../../state/actions/tip.actions';

@Component({
  selector: 'app-tips-list',
  templateUrl: './tips-list.component.html',
  styleUrls: ['./tips-list.component.scss']
})
export class TipsListComponent implements OnInit {
  loading$: Observable<boolean> = new Observable<boolean>();
  tipsList$: Observable<TipModel[]> = new Observable<TipModel[]>();

  today = new Date();
  thisWeek = new Date().getDate() - 7;

  constructor(
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.tipsList$ = this.store.select(selectTipsList)
  }

  getTypeColour(type: TipType): string {
    switch (type) {
      case TipType.DoctorHealthTip: return '#ddedea';
      case TipType.FamilyHealthTip: return '#daeaf6';
      case TipType.FitnessHealthTip: return '#fce1e4';
      case TipType.InsuranceHealthTip: return '#fcf4dd';
      case TipType.PsychoHealthTip: return '#e8dff5';
      default: return '#ddedea';
    }
  }

}
