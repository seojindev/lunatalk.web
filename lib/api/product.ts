import { Product } from '../../types/api';
import client from '../axios';

export function getProduct(uuid: string) {
  return client<Product>({
    method: 'GET',
    url: `/api/front/v1/product/${uuid}/detail`,
  });
}
