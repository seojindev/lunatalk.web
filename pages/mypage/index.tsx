import { QueryClient, dehydrate } from '@tanstack/react-query';
import { getCookies } from 'cookies-next';
import { GetServerSideProps, NextPage } from 'next';
import { queryKeys } from '../../lib/query/queryKeys';
import { getMyOrder } from '../../lib/api/mypage';
import dynamic from 'next/dynamic';

const MypageComponent = dynamic<any>(
  () => import('../../components/mypage/MypageComponent'),
);

const MyPage: NextPage = () => {
  return <MypageComponent />;
};

export default MyPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = getCookies(context);

  const accessToken = cookie.accessToken as string;

  if (!accessToken) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    };
  }
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery([queryKeys.user, queryKeys.myPage], () =>
      getMyOrder(accessToken),
    ),
  ]);
  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
