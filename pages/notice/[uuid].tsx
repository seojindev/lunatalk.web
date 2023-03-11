import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { getNoticeDetail } from '../../lib/api/notice';
import { queryKeys } from '../../lib/query/queryKeys';

const NoticeComponent = dynamic<any>(
  () => import('../../components/notice/NoticeComponent'),
);

const Notice: NextPage = () => {
  return <NoticeComponent />;
};

export default Notice;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const queryClient = new QueryClient();

    const { params } = context;

    const categoryId: any = params?.uuid;

    await queryClient.prefetchQuery([queryKeys.notice, categoryId], () =>
      getNoticeDetail(categoryId),
    );
    return {
      props: { dehydratedState: dehydrate(queryClient) },
    };
  } catch (e) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};
