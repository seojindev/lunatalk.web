import Link from 'next/link';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="max-w-[700px] mx-auto p-16 border-[1px] border-[#ebebeb] rounded text-center flex flex-col gap-5 mobile:p-0 mobile:border-0 mobile:py-24">
      <form className="flex flex-col gap-3">
        <input
          className="border-[1px] border-[#ebebeb] p-4 mobile:text-sm mobile:p-3"
          type="text"
          placeholder="아이디"
        />
        <input
          className="border-[1px] border-[#ebebeb] p-4 mobile:text-sm mobile:p-3"
          type="password"
          placeholder="비밀번호"
        />
        <div className="flex flex-row gap-3 justify-end mb-3 text-sm">
          <Link href="/auth/register">회원가입</Link>
          <Link href="/auth/register">비밀번호 찾기</Link>
        </div>
        <button
          type="submit"
          className="bg-[#f2f2f2] text-[#333] hover:bg-[#a749ff] w-full py-4 hover:text-white transition-all ease-in-out duration-300 mobile:text-sm mobile:p-3"
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
