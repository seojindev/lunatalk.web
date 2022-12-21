import { useQuery } from '@tanstack/react-query';
import client from '../../lib/axios';

function useInitDataQuery(options?: any) {
  return useQuery(
    ['initData'],
    () => client({ url: '/api/system/base-data', method: 'GET' }),
    { ...options },
  );
}

export default useInitDataQuery;
