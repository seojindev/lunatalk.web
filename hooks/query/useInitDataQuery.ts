import { useQuery } from '@tanstack/react-query';
import { getAppInitData } from '../../lib/api/common';

function useInitDataQuery(options?: any) {
  return useQuery(['initData'], () => getAppInitData(), { ...options });
}

export default useInitDataQuery;
