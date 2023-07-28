import { useRouter } from 'next/router';
import useInitDataQuery from '../../hooks/query/useInitDataQuery';

import { Footer, Header } from './elements';

import _ from 'lodash';
import Head from 'next/head';

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const { children } = props;
  const { data: initState } = useInitDataQuery();
  const router = useRouter();
  const notHeaderAndFooterPath = ['/search', '/search/:keyword'];
  return (
    <div>
      <Head>
        <title>루나톡 - 가방, 다이어리 판매 브랜드</title>
      </Head>
      {!_.includes(notHeaderAndFooterPath, router.pathname) && (
        <Header initState={initState} />
      )}
      <div className="max-w-[1200px] py-16 mx-auto tablet:p-2">
        {/* <Spinner /> */}
        {children}
      </div>
      {!_.includes(notHeaderAndFooterPath, router.pathname) && <Footer />}
    </div>
  );
}

export default Layout;
