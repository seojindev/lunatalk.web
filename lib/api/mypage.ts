import { MyPage, ResponseInterface } from '../../types/api';
import client, { accessTokenAdd } from '../axios';

export async function getMyOrder(accessToken: string) {
  const data = await client<ResponseInterface<MyPage>>({
    url: '/api/front/v1/pages/my-page/my-order',
    headers: accessTokenAdd(undefined, accessToken),
    method: 'GET',
  });

  return data.result;
}
