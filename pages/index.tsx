import type { NextPage } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import {
  getMainBestItemData,
  getMainNewItemData,
  getMainNoticeData,
  getMainProductCategoryData,
} from '../lib/api/main';
import dynamic from 'next/dynamic';
import { queryKeys } from '../lib/query/queryKeys';

const MainComponent = dynamic<any>(
  () => import('../components/main/MainComponent'),
);

const Home: NextPage = () => {
  return <MainComponent />;
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  // await queryClient.prefetchQuery(['slides'], () => getMainSlideData());
  await Promise.all([
    // queryClient.prefetchQuery(['slides'], () => getMainSlideData()),
    queryClient.prefetchQuery([queryKeys.main.categories], () =>
      getMainProductCategoryData(),
    ),
    queryClient.prefetchQuery([queryKeys.main.bestItems], () =>
      getMainBestItemData(),
    ),
    queryClient.prefetchQuery([queryKeys.main.newItems], () =>
      getMainNewItemData(),
    ),
    queryClient.prefetchQuery([queryKeys.main.noticeItems], () =>
      getMainNoticeData(),
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
export default Home;
