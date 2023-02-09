import { createReducer, on } from '@ngrx/store';
import {loadTips, loadedTips, sortLoadedTips} from '../actions/tip.actions';
import { TipsState } from '../../core/tips.state';

export const initialState: TipsState = { loading: false, tipsList: [] }

export const tipsReducer = createReducer(
  initialState,
  on(loadTips, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedTips, (state, { tipsList }) => {
    return { ...state, loading: false, tipsList: tipsList };
  }),
  on(sortLoadedTips, (state, { tipsList }) => {
    const t = [...tipsList].sort(function(a,b): any{
      return (new Date(b.datetime).getTime()) - (new Date(a.datetime).getTime());
    });
    return { ...state, loading: false, tipsList: t };
  }),
);
