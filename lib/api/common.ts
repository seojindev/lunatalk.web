import { ResponseInterface } from '../../types/api';
import { AppBase } from '../../types/common';
import client from '../axios';

export async function getAppInitData() {
  const data = await client<ResponseInterface<AppBase>>({
    url: '/api/system/base-data',
    method: 'GET',
  });
  return data.result;
}
