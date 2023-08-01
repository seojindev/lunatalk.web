import { queryKeys } from './../../lib/query/queryKeys';
import { useQuery } from '@tanstack/react-query';
import useUser from '../user/useUser';
import { getMyOrder } from '../../lib/api/mypage';

function useMyPageQuery() {
  const { accessToken } = useUser();
  const { data } = useQuery({
    queryKey: [queryKeys.user, queryKeys.myPage],
    queryFn: () => getMyOrder(accessToken),
  });

  return { myPageData: data };
}

export default useMyPageQuery;
