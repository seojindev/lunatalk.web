import { getCookie } from 'cookies-next';
import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';

const RegisterComponent = dynamic<any>(
  () => import('../../../components/auth/RegisterComponent'),
);

const Register: NextPage = () => {
  return <RegisterComponent />;
};

export default Register;

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
