import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../../lib/query/queryKeys';
import { getProduct, getProductRecommend } from '../../lib/api/product';
import useUser from '../user/useUser';

function useProductDataQuery(uuid: string) {
  const { accessToken } = useUser();
  const { data: productData } = useQuery({
    queryKey: [queryKeys.product, uuid],
    queryFn: () => getProduct(uuid),
  });

  const { data: recommendData } = useQuery({
    queryKey: [queryKeys.recommend, uuid],
    queryFn: () => getProductRecommend(uuid, accessToken),
  });

  return { productData, recommendData };
}

export default useProductDataQuery;
