import { createAction, props } from '@ngrx/store';
import { TipModel } from '../../core/models/tip.interface';

export const loadTips = createAction(
  '[Tips List] Load Tips List',
);

export const loadedTips = createAction(
  '[Tips List] Loaded Tips List Success',
  props<{ tipsList: TipModel[] }>()
)
