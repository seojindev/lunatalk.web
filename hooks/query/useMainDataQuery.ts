import { useQueries } from '@tanstack/react-query';
import _ from 'lodash';
import { useState } from 'react';
import {
  getMainBestItemData,
  getMainNewItemData,
  getMainNoticeData,
  getMainProductCategoryData,
} from '../../lib/api/main';
import { queryKeys } from '../../lib/query/queryKeys';
import { BestItem, MainCategory, NewItem, Notice } from '../../types/api';
import { Product } from '../../types/common';
import { Category } from '../../types/main';

export interface MainData {
  categories: Category[];
  newItems: Product[];
  bestItems: Product[];
  noticeItems: Notice[] | undefined;
}

function useMainDataQuery(): MainData {
  const [
    { data: categories },
    { data: bestItems },
    { data: newItems },
    { data: noticeItems },
  ] = useQueries({
    queries: [
      {
        queryKey: [queryKeys.main.categories],
        queryFn: getMainProductCategoryData,
      },
      {
        queryKey: [queryKeys.main.bestItems],
        queryFn: getMainBestItemData,
      },
      {
        queryKey: [queryKeys.main.newItems],
        queryFn: getMainNewItemData,
      },
      {
        queryKey: [queryKeys.main.noticeItems],
        queryFn: getMainNoticeData,
      },
    ],
  });

  return {
    categories: _.map(categories, (item) => ({
      name: item.name,
      uuid: item.uuid,
      url: item.image.url || '',
    })),
    bestItems: _.map(bestItems, (item) => item.product),
    newItems: _.map(newItems, (item) => item.product),
    noticeItems,
  };
}
export default useMainDataQuery;
