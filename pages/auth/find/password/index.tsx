import { getCookie } from 'cookies-next';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

const FindPasswordComponent = dynamic<any>(
  () => import('../../../../components/auth/FIndPasswordComponent'),
);

function FindPassword() {
  return <FindPasswordComponent />;
}

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
