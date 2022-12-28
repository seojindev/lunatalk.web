import { BestItem, mainCategory, NewItem } from '../../types/api';
import client from '../axios';

export function getMainSlideData() {
  return client({ method: 'GET', url: '/api/front/v1/pages/main/main-slide' });
}

export function getMainProductCategoryData(): Promise<mainCategory[] | []> {
  return client<mainCategory[]>({
    method: 'GET',
    url: '/api/front/v1/pages/main/main-product-category',
  });
}

export function getMainBestItemData(): Promise<BestItem[] | []> {
  return client<BestItem[]>({
    method: 'GET',
    url: '/api/front/v1/pages/main/main-product-best-item',
  });
}

export function getMainNewItemData(): Promise<NewItem[] | []> {
  return client<NewItem[]>({
    method: 'GET',
    url: '/api/front/v1/pages/main/main-product-new-item',
  });
}

export function getMainNoticeData() {
  return client({
    method: 'GET',
    url: '/api/front/v1/pages/main/main-notice',
  });
}
