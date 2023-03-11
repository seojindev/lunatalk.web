import { queryKeys } from './../../lib/query/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { getNoticeDetail } from '../../lib/api/notice';
import useUser from '../user/useUser';

function useNoticeDetailQuery(uuid: string) {
  const { accessToken } = useUser();
  const { data } = useQuery({
    queryKey: [queryKeys.notice, uuid],
    queryFn: () => getNoticeDetail(uuid, accessToken),
  });

  return { noticeData: data };
}

export default useNoticeDetailQuery;
