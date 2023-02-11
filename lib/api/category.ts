import { CategoryList } from '../../types/api';
import client from '../axios';

export function getCategoryListByOption(uuid: string, optionNumber: string) {
  return client<CategoryList>({
    method: 'GET',
    url: `/api/front/v1/pages/product-category/${uuid}/${optionNumber}/list`,
  });
}
