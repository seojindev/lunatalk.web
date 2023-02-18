import { Product } from '../../types/api';
import { Product as CommonProduct } from '../../types/common';
import client from '../axios';

export function getProduct(uuid: string) {
  return client<Product>({
    method: 'GET',
    url: `/api/front/v1/product/${uuid}/detail`,
  });
}
export function getProductRecommend(uuid: string) {
  return client<CommonProduct[]>({
    method: 'GET',
    url: `/api/front/v1/product/${uuid}/recommend`,
  });
}
