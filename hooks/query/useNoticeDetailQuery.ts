import { queryKeys } from './../../lib/query/queryKeys';
import { useQuery } from '@tanstack/react-query';
import { getNoticeDetail } from '../../lib/api/notice';

function useNoticeDetailQuery(uuid: string) {
  const { data } = useQuery({
    queryKey: [queryKeys.notice, uuid],
    queryFn: () => getNoticeDetail(uuid),
  });

  return { noticeData: data };
}

export default useNoticeDetailQuery;
