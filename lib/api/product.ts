import { Product, ResponseInterface } from '../../types/api';
import { Product as CommonProduct } from '../../types/common';
import client, { accessTokenAdd } from '../axios';

export async function getProduct(uuid: string, accessToken?: string) {
  const data = await client<ResponseInterface<Product>>({
    method: 'GET',
    url: `/api/front/v1/product/${uuid}/detail`,
    headers: accessTokenAdd(undefined, accessToken),
  });
  return data.result;
}
export async function getProductRecommend(uuid: string, accessToken?: string) {
  const data = await client<ResponseInterface<CommonProduct[]>>({
    method: 'GET',
    url: `/api/front/v1/product/${uuid}/recommend`,
    headers: accessTokenAdd(undefined, accessToken),
  });
  return data.result;
}

export async function productSearch(keyword: string) {
  const data = await client<ResponseInterface<CommonProduct[]>>({
    method: 'GET',
    url: `/api/front/v1/product/${keyword}/search-list`,
  });
  return data.result;
}
