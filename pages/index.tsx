import type { GetServerSideProps, NextPage } from 'next';
import { queryKeys } from '../lib/query/queryKeys';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import {
  getMainBestItemData,
  getMainNewItemData,
  getMainNoticeData,
  getMainProductCategoryData,
} from '../lib/api/main';
import dynamic from 'next/dynamic';
import { getCookies } from 'cookies-next';

const MainComponent = dynamic<any>(
  () => import('../components/main/MainComponent'),
);

const Home: NextPage = () => {
  return <MainComponent />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  const cookie = getCookies(context);

  const accessToken = cookie.accessToken;

  // await queryClient.prefetchQuery(['slides'], () => getMainSlideData());
  await Promise.all([
    // queryClient.prefetchQuery(['slides'], () => getMainSlideData()),
    queryClient.prefetchQuery([queryKeys.main.categories], () =>
      getMainProductCategoryData(accessToken),
    ),
    queryClient.prefetchQuery([queryKeys.main.bestItems], () =>
      getMainBestItemData(accessToken),
    ),
    queryClient.prefetchQuery([queryKeys.main.newItems], () =>
      getMainNewItemData(accessToken),
    ),
    queryClient.prefetchQuery([queryKeys.main.noticeItems], () =>
      getMainNoticeData(accessToken),
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
export default Home;
