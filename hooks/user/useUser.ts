import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

function useUser() {
  const accessTokenCookie = getCookie('accessToken');
  const refreshToken = getCookie('refreshToken');
  const router = useRouter();

  const accessToken: any = accessTokenCookie || undefined;

  const isLogin = !!accessToken;

  const logout = () => {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    toast.success('로그아웃 되었습니다.');
    router.push('/');
  };

  return { isLogin, accessToken, refreshToken, logout };
}

export default useUser;
