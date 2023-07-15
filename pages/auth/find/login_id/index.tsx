import { getCookie } from 'cookies-next';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

const FindLoginIdComponent = dynamic<any>(
  () => import('../../../../components/auth/FIndLoginIdComponent'),
);

function FindLoginId() {
  return <FindLoginIdComponent />;
}

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
