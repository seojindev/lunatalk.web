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

export async function getMainProductCategoryData() {
  const data = await client<ResponseInterface<MainCategory[]>>({
    method: 'GET',
    url: '/api/front/v1/pages/main/main-product-category',
  });
  return data.result;
}

export async function getMainBestItemData() {
  const data = await client<ResponseInterface<BestItem[]>>({
    method: 'GET',
    url: '/api/front/v1/pages/main/main-product-best-item',
  });
  return data.result;
}

export async function getMainNewItemData() {
  const data = await client<ResponseInterface<NewItem[]>>({
    method: 'GET',
    url: '/api/front/v1/pages/main/main-product-new-item',
  });
  return data.result;
}

export async function getMainNoticeData() {
  const data = await client<ResponseInterface<Notice[]>>({
    method: 'GET',
    url: '/api/front/v1/pages/main/main-notice',
  });
  return data.result;
}
