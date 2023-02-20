import { Product, ResponseInterface } from '../../types/api';
import { Product as CommonProduct } from '../../types/common';
import client from '../axios';

export async function getProduct(uuid: string) {
  const data = await client<ResponseInterface<Product>>({
    method: 'GET',
    url: `/api/front/v1/product/${uuid}/detail`,
  });
  return data.result;
}
export async function getProductRecommend(uuid: string) {
  const data = await client<ResponseInterface<CommonProduct[]>>({
    method: 'GET',
    url: `/api/front/v1/product/${uuid}/recommend`,
  });
  return data.result;
}
