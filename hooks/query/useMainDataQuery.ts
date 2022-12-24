import { useQueries } from '@tanstack/react-query';
import {
  getMainBestItemData,
  getMainNewItemData,
  getMainNoticeData,
  getMainProductCategoryData,
} from '../../lib/api/main';

function useMainDataQuery() {
  const [
    { data: categories },
    { data: bestItems },
    { data: newItems },
    { data: noticeItems },
  ] = useQueries({
    queries: [
      // { queryKey: ['slides'], queryFn: getMainSlideData },
      { queryKey: ['categories'], queryFn: getMainProductCategoryData },
      { queryKey: ['bestItems'], queryFn: getMainBestItemData },
      { queryKey: ['newItems'], queryFn: getMainNewItemData },
      { queryKey: ['notices'], queryFn: getMainNoticeData },
    ],
  });

  return {
    categories,
    bestItems,
    newItems,
    noticeItems,
  };
}
export default useMainDataQuery;
