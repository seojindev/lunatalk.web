import { dehydrate, QueryClient } from '@tanstack/react-query';
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

  const { params } = context;

  const categoryId: any = params?.uuid;

  queryClient.prefetchQuery([queryKeys.category, categoryId, '6000010'], () =>
    getCategoryListByOption(categoryId, '6000010'),
  );
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
