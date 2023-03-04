import _ from 'lodash';
import { atom, selector } from 'recoil';
import { AppBase } from '../types/common';

export const appInitState = atom<AppBase | null>({
  key: 'initDataState',
  default: null,
});

export const categoryOptionsState = selector({
  key: 'CategoryOption',
  get: ({ get }) => {
    const appInitData = get(appInitState);
    if (!appInitData) return [];

    const {
      codes: { code_group: codeGroup },
    } = appInitData;

    const options = codeGroup[600] || [];
    return _.map(options, (item) => ({
      value: item.code_id,
      label: item.code_name,
    }));
  },
});

export const emailAddressState = selector({
  key: 'EamilAddress',
  get: ({ get }) => {
    const appInitData = get(appInitState);
    if (!appInitData) return [];

    const {
      codes: { code_group: codeGroup },
    } = appInitData;

    const options = codeGroup[400] || [];
    return _.map(options, (item) => ({
      value: item.code_id,
      label: item.code_name,
    }));
  },
});
