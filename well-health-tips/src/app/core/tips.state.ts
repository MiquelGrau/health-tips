import {TipModel} from './models/tip.interface';

export interface TipsState {
  loading: boolean,
  sorted: boolean,
  tipsList: TipModel[];
  selectedTip: TipModel | null;
}
