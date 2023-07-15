import { getCookie } from 'cookies-next';
import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';

const FindPasswordComponent = dynamic<any>(
  () => import('../../../../components/auth/FIndPasswordComponent'),
);

const FindPassword: NextPage = () => {
  return <FindPasswordComponent />;
};

export default FindPassword;

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
