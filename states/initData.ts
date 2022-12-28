import { atom } from 'recoil';
import { AppBase } from '../types/common';

export const appInitState = atom<AppBase | null>({
  key: 'initDataState',
  default: null,
});
