import { ResponseInterface, Cart } from './../../types/api';
import { accessTokenAdd } from './../axios';
import client from '../axios';

export async function getCartList(accessToken: string) {
  const data = await client<ResponseInterface<Cart[]>>({
    method: 'GET',
    url: 'api/front/v1/pages/cart/list',
    headers: accessTokenAdd(undefined, accessToken),
  });

  return data.result || [];
}

export async function addCart(accesstoken: string, productUuid: string) {
  const data = await client<ResponseInterface<undefined>>({
    method: 'POST',
    url: `/api/front/v1/pages/cart/${productUuid}/create`,
    headers: accessTokenAdd(undefined, accesstoken),
  });

  return data.message;
}

export async function deleteCart(accessToken: string, cartId: number) {
  const data = await client<ResponseInterface<undefined>>({
    method: 'DELETE',
    url: `/api/front/v1/pages/cart/${cartId}/delete`,
    headers: accessTokenAdd(undefined, accessToken),
  });

  return data.message;
}
