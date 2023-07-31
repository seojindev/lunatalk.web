import { getCookie } from 'cookies-next';
import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { queryKeys } from '../../lib/query/queryKeys';
import { getMyOrderInfo } from '../../lib/api/order';

interface OrderProps {
  items: {
    uuid: string;
    name: string;
    price: {
      number: number;
      string: string;
    };
    count: number;
  }[];
}

const OrderComponent = dynamic<any>(
  () => import('../../components/order/OrderComponent'),
);

const Order: NextPage<OrderProps> = ({ items }: OrderProps) => {
  return <OrderComponent items={items} />;
};

export default Order;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const accessToken = getCookie('accessToken', context);
  try {
    if (!accessToken) {
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      };
    }

    if (!context.query.item) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    const items = context.query.item as string;

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery([queryKeys.order, queryKeys.user], () =>
      getMyOrderInfo(accessToken as string),
    );
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        items: JSON.parse(Buffer.from(items, 'base64').toString()),
      },
    };
  } catch (e) {
    console.log(e);
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};
