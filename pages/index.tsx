import type { NextPage } from 'next';
import {
  dehydrate,
  QueryClient,
  useQueries,
  useQuery,
} from '@tanstack/react-query';
import {
  getMainBestItemData,
  getMainNewItemData,
  getMainNoticeData,
  getMainProductCategoryData,
  getMainSlideData,
} from '../lib/api/main';
import useMainDataQuery from '../hooks/query/useMainDataQuery';
import Categories from '../components/main/Categories';
import BestItem from '../components/main/BestItem';
import NewItem from '../components/main/NewItem';

const Home: NextPage = () => {
  const { categories, bestItems, newItems, noticeItems } = useMainDataQuery();

  return (
    <>
      <Categories categories={categories} />
      <BestItem />
      <NewItem />
    </>
  );
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
