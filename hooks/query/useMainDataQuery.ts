import { useQueries } from '@tanstack/react-query';
import _ from 'lodash';
import {
  getMainBestItemData,
  getMainNewItemData,
  getMainNoticeData,
  getMainProductCategoryData,
} from '../../lib/api/main';
import { queryKeys } from '../../lib/query/queryKeys';
import { Notice } from '../../types/api';
import { Product } from '../../types/common';
import { Category } from '../../types/main';
import useUser from '../user/useUser';

export interface MainData {
  categories: Category[];
  newItems: Product[];
  bestItems: Product[];
  noticeItems: Notice[] | undefined;
}

function useMainDataQuery(): MainData {
  const { accessToken } = useUser();
  const [
    { data: categories },
    { data: bestItems },
    { data: newItems },
    { data: noticeItems },
  ] = useQueries({
    queries: [
      {
        queryKey: [queryKeys.main.categories],
        queryFn: () => getMainProductCategoryData(accessToken),
      },
      {
        queryKey: [queryKeys.main.bestItems],
        queryFn: () => getMainBestItemData(accessToken),
      },
      {
        queryKey: [queryKeys.main.newItems],
        queryFn: () => getMainNewItemData(accessToken),
      },
      {
        queryKey: [queryKeys.main.noticeItems],
        queryFn: () => getMainNoticeData(accessToken),
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
