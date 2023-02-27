import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/router';

function useUser() {
  const accessToken = getCookie('accessToken');
  const refreshToken = getCookie('refreshToken');
  const router = useRouter();

  const user = !!accessToken;

  const logout = () => {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    router.push('/');
  };

  return { user, accessToken, refreshToken, logout };
}

export default useUser;
