import { queryKeys } from './../../lib/query/queryKeys';
import { useQuery } from '@tanstack/react-query';
import useUser from '../user/useUser';
import { getMyOrderInfo } from '../../lib/api/order';

function useOrderMyInformation() {
  const { accessToken } = useUser();
  const { data } = useQuery({
    queryKey: [queryKeys.order, queryKeys.user],
    queryFn: () => getMyOrderInfo(accessToken),
  });

  return { orderInformation: data };
}

export default useOrderMyInformation;
