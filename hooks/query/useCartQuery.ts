// import { queryClient } from './../../lib/query/queryClient';
import { useQuery } from '@tanstack/react-query';
import { getCartList } from '../../lib/api/cart';
import { queryKeys } from '../../lib/query/queryKeys';
import useUser from '../user/useUser';
function useCartQuery() {
  const { accessToken } = useUser();
  const { data: list } = useQuery({
    queryKey: [queryKeys.user, queryKeys.cart],
    queryFn: () => getCartList(accessToken),
  });

  return { list };
}

export default useCartQuery;
