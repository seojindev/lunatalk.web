import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { LoginForm } from '../../../hooks/auth/useAuth';
import AuthForm from '../elements/AuthForm';
import Button from '../elements/Button';
import Input from '../elements/Input';
import SubMenu from './SubMenu';

interface Props {
  register: UseFormRegister<LoginForm>;
  errors: FieldErrors<LoginForm>;
  isLoading: boolean;
  handleSubmit: any;
}

function Login(props: Props) {
  const { register, errors, isLoading, handleSubmit } = props;
  return (
    <AuthForm handleSubmit={handleSubmit}>
      <Input
        register={register('loginId', {
          required: '아이디를 입력해주세요.',
        })}
        error={errors.loginId?.message}
        placeHolder={'아이디'}
        type={'text'}
      />
      <Input
        register={register('password', {
          required: '비밀번호를 입력해주세요.',
        })}
        error={errors.password?.message}
        placeHolder={'비밀번호'}
        type={'password'}
      />
      <SubMenu />
      <Button text={'로그인'} isLoading={isLoading} />
    </AuthForm>
  );
}

export default Login;
