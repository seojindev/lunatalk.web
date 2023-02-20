import { CategoryList, ResponseInterface } from '../../types/api';
import client from '../axios';

export async function getCategoryListByOption(
  uuid: string,
  optionNumber: string,
) {
  const data = await client<ResponseInterface<CategoryList>>({
    method: 'GET',
    url: `/api/front/v1/pages/product-category/${uuid}/${optionNumber}/list`,
  });

  return data.result;
}
