import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../lib/query/queryKeys';
import { getProduct } from '../../lib/api/product';

function useProductDataQuery(uuid: string) {
  const { data } = useQuery({
    queryKey: [queryKeys.product, uuid],
    queryFn: () => getProduct(uuid),
  });

  return { data };
}

export default useProductDataQuery;
