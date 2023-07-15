import { getCookie } from 'cookies-next';
import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';

const FindLoginIdComponent = dynamic<any>(
  () => import('../../../../components/auth/FIndLoginIdComponent'),
);

const FindLoginId: NextPage = () => {
  return <FindLoginIdComponent />;
};

export default FindLoginId;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const accessToken = getCookie('accessToken', context);

  if (accessToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
