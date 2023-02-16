import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { getProduct } from '../../lib/api/product';
import { queryKeys } from '../../lib/query/queryKeys';

const ProductComponent = dynamic<any>(
  () => import('../../components/product/ProductComponent'),
);

const Product: NextPage = () => {
  return <ProductComponent />;
};
export default Product;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  const { params } = context;

  const productId: any = params?.uuid;

  await queryClient.prefetchQuery([queryKeys.product, productId], () =>
    getProduct(productId),
  );
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
