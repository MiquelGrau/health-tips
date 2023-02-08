import { createReducer, on } from '@ngrx/store';
import { loadTips, loadedTips } from '../actions/tip.actions';
import { TipsState } from '../../core/tips.state';

export const initialState: TipsState = { loading: false, tipsList: [] }

export const tipsReducer = createReducer(
  initialState,
  on(loadTips, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedTips, (state, { tipsList }) => {
    return { ...state, loading: false, tipsList: tipsList };
  })
);
