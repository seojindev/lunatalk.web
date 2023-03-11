import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getCookies } from 'cookies-next';
import type { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { getCategoryListByOption } from '../../lib/api/category';
import { queryKeys } from '../../lib/query/queryKeys';

const CategoryComponent = dynamic<any>(
  () => import('../../components/category/CategoryComponent'),
);

const Category: NextPage = () => {
  return <CategoryComponent />;
};

export default Category;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  const cookie = getCookies(context);
  const accessToken = cookie.accessToken;

  const { params } = context;

  const categoryId: any = params?.uuid;

  await queryClient.prefetchQuery(
    [queryKeys.category, categoryId, '6000010'],
    () => getCategoryListByOption(categoryId, '6000010', accessToken),
  );
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
