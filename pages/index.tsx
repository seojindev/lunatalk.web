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
import Categories from '../components/main/Categories';

const Home: NextPage = () => {
  const [
    { data: categories },
    { data: bestItems },
    { data: newItems },
    { data: noticeItem },
  ] = useQueries({
    queries: [
      // { queryKey: ['slides'], queryFn: getMainSlideData },
      { queryKey: ['categories'], queryFn: getMainProductCategoryData },
      { queryKey: ['bestItems'], queryFn: getMainBestItemData },
      { queryKey: ['newItems'], queryFn: getMainNewItemData },
      { queryKey: ['notices'], queryFn: getMainNoticeData },
    ],
  });

  return (
    <>
      <div className="font-extrabold text-xl">main</div>
      <Categories categories={categories} />
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
