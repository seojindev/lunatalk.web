import { AppBase } from '../../types/common';
import client from '../axios';

export function getAppInitData() {
  return client<AppBase>({ url: '/api/system/base-data', method: 'GET' });
}
