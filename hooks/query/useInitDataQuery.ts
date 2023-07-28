import { useQuery } from '@tanstack/react-query';
import { getAppInitData } from '../../lib/api/common';

function useInitDataQuery() {
  const { data } = useQuery(['initData'], () => getAppInitData());
  return { data };
}

export default useInitDataQuery;
