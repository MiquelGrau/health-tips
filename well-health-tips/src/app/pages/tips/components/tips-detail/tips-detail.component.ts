import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {TipModel, TipType} from '../../../../core/models/tip.interface';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {
  selectSelectedTip,
} from '../../../../state/selectors/tips.selectors';
import {selectTip, unselectTip, upVoteTip} from '../../../../state/actions/tip.actions';

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
    this.store.dispatch(unselectTip());
    this.router.navigate(['/list']);
  }

  upVote(id: number): void {
    this.store.dispatch(upVoteTip( { id: id }));
  }

  downVote(id: number): void {
    this.store.dispatch(upVoteTip( { id: id }));
  }

}
