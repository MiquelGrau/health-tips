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
