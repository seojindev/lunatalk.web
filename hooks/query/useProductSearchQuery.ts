import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../lib/query/queryKeys';
import { productSearch } from '../../lib/api/product';

function useProductSearchQuery(keyword: string) {
  const { data: productData } = useQuery({
    queryKey: [queryKeys.product, queryKeys.search, keyword],
    queryFn: () => productSearch(keyword),
    enabled: !!keyword,
    refetchOnMount: 'always',
  });

  return { productData };
}

export default useProductSearchQuery;
