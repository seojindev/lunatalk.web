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
import { BestItem, NewItem } from '../../types/api';
import { Product } from '../../types/common';
import { MainCategory } from '../../types/main';

interface MainData {
  categories: MainCategory[];
  newItems: Product[];
  bestItems: Product[];
  noticeItems: any[];
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
      // { queryKey: ['slides'], queryFn: getMainSlideData },
      {
        queryKey: [queryKeys.main.categories],
        queryFn: getMainProductCategoryData,
        onSuccess: (data: any) => {
          setMainData((prev) => ({ ...prev, categories: data }));
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
        onSuccess: (data: any) => {
          setMainData((prev) => ({ ...prev, noticeItems: data }));
        },
      },
    ],
  });

  return mainData;
}
export default useMainDataQuery;
