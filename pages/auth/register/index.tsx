import { getCookie } from 'cookies-next';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

const RegisterComponent = dynamic<any>(
  () => import('../../../components/auth/RegisterComponent'),
);

function Register() {
  return <RegisterComponent />;
}

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
