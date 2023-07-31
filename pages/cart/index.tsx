import { dehydrate, QueryClient } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { getCartList } from '../../lib/api/cart';
import { queryKeys } from '../../lib/query/queryKeys';

const CartComponent = dynamic<any>(
  () => import('../../components/cart/CartComponent'),
);

const Cart: NextPage = () => {
  return <CartComponent />;
};

export default Cart;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const accessToken = getCookie('accessToken', context);

  if (!accessToken) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.cart, queryKeys.user], () =>
    getCartList(accessToken as string),
  );

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
