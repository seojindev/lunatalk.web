import type { NextPage } from 'next';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import {
  getMainBestItemData,
  getMainNewItemData,
  getMainNoticeData,
  getMainProductCategoryData,
} from '../lib/api/main';
import dynamic from 'next/dynamic';
// import MainComponent from '../components/main/MainComponent';

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
    queryClient.prefetchQuery(['categories'], () =>
      getMainProductCategoryData(),
    ),
    queryClient.prefetchQuery(['bestItems'], () => getMainBestItemData()),
    queryClient.prefetchQuery(['newItems'], () => getMainNewItemData()),
    queryClient.prefetchQuery(['notices'], () => getMainNoticeData()),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
export default Home;
