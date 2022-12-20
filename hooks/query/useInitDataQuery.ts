import { useQuery } from '@tanstack/react-query';
import client from '../../lib/axios';

function useInitDataQuery() {
  return useQuery(['initData'], () =>
    client({ url: '/api/system/base-data', method: 'GET' }),
  );
}

export default useInitDataQuery;
