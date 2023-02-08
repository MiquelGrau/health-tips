import {TipModel} from '../core/models/tip.interface';
import { TipsState } from '../core/tips.state';
import { ActionReducerMap } from '@ngrx/store';
import { tipsReducer } from './reducers/tips.reducers';

export interface AppState {
  tips: TipsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  tips: tipsReducer
};
