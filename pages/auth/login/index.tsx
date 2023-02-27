import { useMutation } from '@tanstack/react-query';
import cn from 'classnames';
import { getCookie } from 'cookies-next';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import { MoonLoader } from 'react-spinners';
import useAuth, { LoginForm } from '../../../hooks/auth/useAuth';

function Login() {
  const { loginMutate, handleSubmit, register, errors, isLoading } = useAuth();

  const onSubmit = async (loginData: LoginForm) => {
    loginMutate(loginData);
  };

  return (
    <div className="max-w-[700px] mx-auto p-16 border-[1px] border-[#ebebeb] rounded text-center flex flex-col gap-5 mobile:p-0 mobile:border-0 mobile:py-24">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border-[1px] border-[#ebebeb] p-4 mobile:text-sm mobile:p-3"
          type="text"
          placeholder="아이디"
          {...register('loginId', { required: '아이디를 입력해주세요.' })}
        />
        {errors.loginId && (
          <p className="text-left text-sm text-red-500">
            {errors.loginId.message}
          </p>
        )}
        <input
          className="border-[1px] border-[#ebebeb] p-4 mobile:text-sm mobile:p-3"
          type="password"
          placeholder="비밀번호"
          {...register('password', { required: '비밀번호를 입력해주세요.' })}
        />
        {errors.password && (
          <p className="text-left text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
        <div className="flex flex-row gap-3 justify-end mb-3 text-sm">
          <Link href="/auth/register">회원가입</Link>
          <Link href="/auth/register">비밀번호 찾기</Link>
        </div>
        <button
          type="submit"
          className={cn(
            ' text-[#333] hover:bg-[#a749ff] w-full py-4 hover:text-white transition-all ease-in-out duration-300 mobile:text-sm mobile:p-3 flex justify-center',
            { 'bg-[#a749ff]': isLoading },
            { 'bg-[#f2f2f2]': !isLoading },
          )}
          disabled={isLoading}
        >
          {isLoading ? <MoonLoader color="#000" size={18} /> : '로그인'}
        </button>
      </form>
    </div>
  );
}

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
