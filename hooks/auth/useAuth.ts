import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { login } from '../../lib/api/auth';

export interface LoginForm {
  loginId: string;
  password: string;
}

function useAuth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>({
    mode: 'onSubmit',
    defaultValues: { loginId: '', password: '' },
  });
  const router = useRouter();

  const { mutate: loginMutate, isLoading } = useMutation(
    (loginData: LoginForm) => login(loginData.loginId, loginData.password),
    {
      onSuccess: (data) => {
        setCookie('accessToken', data['access_token']);
        setCookie('refreshToken', data['refresh_token']);
        router.push('/');
        reset();
      },
    },
  );

  return { register, handleSubmit, errors, loginMutate, isLoading };
}

export default useAuth;
