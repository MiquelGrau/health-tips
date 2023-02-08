import {TipModel} from './models/tip.interface';

export interface TipsState {
  loading: boolean,
  tipsList: ReadonlyArray<TipModel>;
}
