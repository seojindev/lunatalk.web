import { CategoryList, ResponseInterface } from '../../types/api';
import client, { accessTokenAdd } from '../axios';

export async function getCategoryListByOption(
  uuid: string,
  optionNumber: string,
  accessToken?: string | null,
) {
  const data = await client<ResponseInterface<CategoryList>>({
    method: 'GET',
    url: `/api/front/v1/pages/product-category/${uuid}/${optionNumber}/list`,
    headers: accessTokenAdd(undefined, accessToken),
  });

  return data.result;
}
