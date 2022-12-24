import client from '../axios';

export function getAppInitData() {
  return client({ url: '/api/system/base-data', method: 'GET' });
}
