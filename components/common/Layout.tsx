import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import useInitDataQuery from '../../hooks/query/useInitDataQuery';
import { appInitState } from '../../states/initData';
import Spinner from './Spinner';

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const { data, error, isLoading } = useInitDataQuery();

  const [initState, setInitState] = useRecoilState(appInitState);

  useEffect(() => {
    if (!data) return;
    setInitState(data.result);
  }, [data]);

  console.log(isLoading, initState);

  useEffect(() => {
    // 에러시 처리해야함.
  }, [error]);

  const { children } = props;

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      {initState?.product_category.map((item) => (
        <div key={item.uuid}>{item.name}</div>
      ))}
      {children}
    </div>
  );
}

export default Layout;