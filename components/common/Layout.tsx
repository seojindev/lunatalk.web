import Image from 'next/image';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import useInitDataQuery from '../../hooks/query/useInitDataQuery';
import { AppBase, appInitState } from '../../states/initData';
import { Footer } from './footer';
import { Header } from './header';
import Spinner from './Spinner';

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const [initState, setInitState] = useRecoilState(appInitState);
  const { error, isLoading } = useInitDataQuery({
    onSuccess: (result: AppBase) => {
      setInitState(result);
    },
  });

  useEffect(() => {
    // 에러시 처리해야함.
  }, [error]);

  const { children } = props;

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <Header initState={initState} />
      <div className="max-w-[1200px] mx-auto">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
