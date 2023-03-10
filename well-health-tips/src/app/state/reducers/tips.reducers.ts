import { createReducer, on } from '@ngrx/store';
import {
  loadTips,
  loadedTips,
  sortLoadedTips,
  selectTip,
  loadTip,
  loadedTip,
  upVoteTip,
  unselectTip, downVoteTip, upVotedTip, downVotedTip
} from '../actions/tip.actions';
import { TipsState } from '../../core/tips.state';

export const initialState: TipsState = { loading: false, sorted: false, tipsList: [], selectedTip: null }

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
    return { ...state, loading: false, sorted: true, tipsList: t };
  }),
  on(loadTip, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedTip, (state, { tip }) => {
    return { ...state, loading: false, selectedTip: tip };
  }),
  on(selectTip, (state, { tip }) => {
    return { ...state, selectedTip: tip };
  }),
  on(unselectTip, (state) => {
    return { ...state, selectedTip: null };
  }),
  on(upVoteTip, (state) => {
    return { ...state };
  }),
  on(upVotedTip, (state, { tip }) => {
    const newTipsList = [...state.tipsList];
    if (state.tipsList?.length) {
      const tipIndex = newTipsList.findIndex(t => t.id === tip.id);
      newTipsList[tipIndex].upVotes++;
    }

    return { ...state, selectedTip: tip, tipsList: newTipsList };
  }),
  on(downVoteTip, (state) => {
    return { ...state };
  }),
  on(downVotedTip, (state, { tip }) => {
    const newTipsList = [...state.tipsList];
    if (state.tipsList?.length) {
      const tipIndex = newTipsList.findIndex(t => t.id === tip.id);
      newTipsList[tipIndex].upVotes--;
    }

    return { ...state, selectedTip: tip, tipsList: newTipsList };
  }),
);
