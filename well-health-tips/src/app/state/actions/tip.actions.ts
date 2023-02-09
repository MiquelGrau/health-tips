import { createAction, props } from '@ngrx/store';
import { TipModel } from '../../core/models/tip.interface';

export const loadTips = createAction(
  '[Tips List] Load Tips List',
);

export const loadedTips = createAction(
  '[Tips List] Loaded Tips List Success',
  props<{ tipsList: TipModel[] }>()
);

export const sortLoadedTips = createAction(
  '[Tips List] Sort Loaded Tips List Success',
  props<{ tipsList: TipModel[] }>()
);

export const loadTip = createAction(
  '[Tip Details] Load Tip',
  props<{ id: string }>()
);

export const loadedTip = createAction(
  '[Tip Details] Loaded Tip Success',
  props<{ tip: TipModel }>()
);

export const selectTip = createAction(
  '[Tips List] Tip Selected Success',
  props<{ tip: TipModel | null }>()
);
