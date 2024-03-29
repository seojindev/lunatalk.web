import { getCookie } from 'cookies-next';
import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';

const LoginComponent = dynamic<any>(
  () => import('../../../components/auth/LoginComponent'),
);

// function Login() {
//   return <LoginComponent />;
// }

const Login: NextPage = () => {
  return <LoginComponent />;
};

export default Login;

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
