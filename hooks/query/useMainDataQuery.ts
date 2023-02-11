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
  noticeItems: Notice[];
}

function useMainDataQuery() {
  const [mainData, setMainData] = useState<MainData>({
    categories: [],
    newItems: [],
    bestItems: [],
    noticeItems: [],
  });
  useQueries({
    queries: [
      {
        queryKey: [queryKeys.main.categories],
        queryFn: getMainProductCategoryData,
        onSuccess: (data: MainCategory[]) => {
          const categories = _.map(data, (item) => ({
            name: item.name,
            uuid: item.uuid,
            url: item.image.url || '',
          }));
          setMainData((prev) => ({ ...prev, categories }));
        },
      },
      {
        queryKey: [queryKeys.main.bestItems],
        queryFn: getMainBestItemData,
        onSuccess: (data: BestItem[]) => {
          const bestItems = _.map(data, (item) => item.product);

          setMainData((prev) => ({ ...prev, bestItems }));
        },
      },
      {
        queryKey: [queryKeys.main.newItems],
        queryFn: getMainNewItemData,
        onSuccess: (data: NewItem[]) => {
          const newItems = _.map(data, (item) => item.product);

          setMainData((prev) => ({ ...prev, newItems }));
        },
      },
      {
        queryKey: [queryKeys.main.noticeItems],
        queryFn: getMainNoticeData,
        onSuccess: (data: Notice[]) => {
          setMainData((prev) => ({ ...prev, noticeItems: data }));
        },
      },
    ],
  });

  return mainData;
}
export default useMainDataQuery;
