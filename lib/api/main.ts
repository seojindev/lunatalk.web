import client from '../axios';

export function getMainSlideData() {
  return client({ method: 'GET', url: '/api/front/v1/pages/main/main-slide' });
}

export function getMainProductCategoryData() {
  return client({
    method: 'GET',
    url: '/api/front/v1/pages/main/main-product-category',
  });
}

export function getMainBestItemData() {
  return client({
    method: 'GET',
    url: '/api/front/v1/pages/main/main-product-best-item',
  });
}

export function getMainNewItemData() {
  return client({
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
