import useAuth, { LoginForm } from '../../../hooks/auth/useAuth';

interface LoginHocProps {
  WrappedComponent: React.ComponentType<any>;
}
function LoginHoc(props: LoginHocProps) {
  const { WrappedComponent } = props;

  const { loginMutate, handleSubmit, register, errors, isLoading } = useAuth();

  const onSubmit = async (loginData: LoginForm) => {
    loginMutate(loginData);
  };
  const loginData = {
    register,
    errors,
    isLoading,
    handleSubmit: handleSubmit(onSubmit),
  };
  return <WrappedComponent {...loginData} />;
}

export default LoginHoc;
