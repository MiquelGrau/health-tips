import { createSelector } from '@ngrx/store';
import {AppState} from '../app.state';
import {TipsState} from '../../core/tips.state';

export const selectTipsFeature = (state: AppState) => state.tips;

export const selectTipsList = createSelector(
  selectTipsFeature,
  (state: TipsState) => state.tipsList
);

export const selectLoading = createSelector(
  selectTipsFeature,
  (state: TipsState) => state.loading
);

export const selectSorted = createSelector(
  selectTipsFeature,
  (state: TipsState) => state.sorted
);

export const selectSelectedTip = createSelector(
  selectTipsFeature,
  (state: TipsState) => state.selectedTip
);
