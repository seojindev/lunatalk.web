import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { getAppInitData } from '../../lib/api/common';
import { appInitState } from '../../states/initData';
import { AppBase } from '../../types/common';

function useInitDataQuery() {
  const [initState, setInitState] = useRecoilState(appInitState);
  const { data } = useQuery(['initData'], () => getAppInitData(), {
    onSuccess: (result: AppBase) => {
      setInitState(result);
    },
    enabled: !initState,
  });
  return { data };
}

export default useInitDataQuery;
