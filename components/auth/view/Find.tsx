import Link from 'next/link';
import AuthForm from '../elements/AuthForm';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { FieldErrors } from 'react-hook-form';
import Button from '../elements/Button';
import Input from '../elements/Input';
import SubMenu from './SubMenu';

interface Props {
  onSubmit: any;
  isLoading: boolean;
  register: any;
  errors: FieldErrors<{ email: string; loginId?: string }>;
  findType: string;
}

function Find(props: Props) {
  const router = useRouter();
  const { register, isLoading, errors, onSubmit, findType } = props;

  console.log(11111);
  return (
    <AuthForm handleSubmit={onSubmit}>
      <div className="flex justify-center gap-8 text-xl font-semibold">
        <Link
          href={'/auth/find/login_id'}
          className={classNames(
            "relative before:w-[1px] before:content=[''] before:h-[18px] before:absolute before:right-[-15px] before:bottom-[5px] before:bg-[#454545] before:mx-auto",
            { 'text-[#a749ff]': router.pathname === '/auth/find/login_id' },
          )}
        >
          <h2>아이디 찾기</h2>
        </Link>
        <Link
          href={'/auth/find/password'}
          className={classNames('', {
            'text-[#a749ff]': router.pathname === '/auth/find/password',
          })}
        >
          <h2>비밀번호 찾기</h2>
        </Link>
      </div>
      {findType === 'password' && (
        <Input
          type="text"
          register={register('loginId', { required: '아이디 입력해주세요.' })}
          error={errors.loginId?.message}
          placeHolder="아이디를 입력해주세요."
        />
      )}
      <Input
        type="text"
        register={register('email', { required: '이메일을 입력해주세요.' })}
        error={errors.email?.message}
        placeHolder="가입하실때 입력한 이메일을 입력해주세요."
      />
      <SubMenu />
      <Button text="이메일 전송" isDisabled={isLoading} isLoading={isLoading} />
    </AuthForm>
  );
}
export default Find;
