import { accessTokenAdd } from './../axios';
import {
  BestItem,
  MainCategory,
  NewItem,
  Notice,
  ResponseInterface,
} from '../../types/api';
import client from '../axios';

export function getMainSlideData() {
  return client({ method: 'GET', url: '/api/front/v1/pages/main/main-slide' });
}

export async function getMainProductCategoryData(accessToken?: string) {
  const data = await client<ResponseInterface<MainCategory[]>>({
    method: 'GET',
    url: '/api/front/v1/pages/main/main-product-category',
    headers: accessTokenAdd(undefined, accessToken),
  });
  return data.result;
}

export async function getMainBestItemData(accessToken?: string) {
  const data = await client<ResponseInterface<BestItem[]>>({
    method: 'GET',
    url: '/api/front/v1/pages/main/main-product-best-item',
    headers: accessTokenAdd(undefined, accessToken),
  });
  return data.result;
}

export async function getMainNewItemData(accessToken?: string) {
  const data = await client<ResponseInterface<NewItem[]>>({
    method: 'GET',
    url: '/api/front/v1/pages/main/main-product-new-item',
    headers: accessTokenAdd(undefined, accessToken),
  });
  return data.result;
}

export async function getMainNoticeData(accessToken?: string) {
  const data = await client<ResponseInterface<Notice[]>>({
    method: 'GET',
    url: '/api/front/v1/pages/main/main-notice',
    headers: accessTokenAdd(undefined, accessToken),
  });
  return data.result;
}
