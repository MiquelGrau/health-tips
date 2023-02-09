import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {TipModel, TipType} from '../../../../core/models/tip.interface';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {
  selectSelectedTip,
} from '../../../../state/selectors/tips.selectors';
import {selectTip} from '../../../../state/actions/tip.actions';

@Component({
  selector: 'app-tips-detail',
  templateUrl: './tips-detail.component.html',
  styleUrls: ['./tips-detail.component.scss']
})
export class TipsDetailComponent {
  tip$: Observable<TipModel | null> = new Observable<TipModel>();

  constructor(
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tip$ = this.store.select(selectSelectedTip);
  }

  backToList(): void {
    this.store.dispatch(selectTip({ tip: null }));
    this.router.navigate(['/list']);
  }

  upVote(): void {

  }

  downVote(): void {

  }

  getTypeColour(type: TipType): string { // TODO this should be a pipe?
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
