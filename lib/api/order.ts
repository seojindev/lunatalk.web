import { ResponseInterface } from '../../types/api';
import client, { accessTokenAdd } from '../axios';

export async function setOrder(body: any, accessToken: string) {
  const data = await client<ResponseInterface<any>>({
    method: 'POST',
    url: `/api/front/v1/pages/product/order`,
    headers: accessTokenAdd(undefined, accessToken),
    body,
  });
  return data.result;
}
