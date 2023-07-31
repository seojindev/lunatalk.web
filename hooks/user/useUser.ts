import { queryClient } from './../../lib/query/queryClient';
import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { queryKeys } from '../../lib/query/queryKeys';

function useUser() {
  const accessTokenCookie = getCookie('accessToken');
  const refreshToken = getCookie('refreshToken');
  const router = useRouter();

  const accessToken: any = accessTokenCookie || undefined;

  const isLogin = !!accessToken;

  const logout = () => {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    queryClient.invalidateQueries([queryKeys.user]);
    toast.success('로그아웃 되었습니다.');
    router.push('/');
  };

  return { isLogin, accessToken, refreshToken, logout };
}

export default useUser;
