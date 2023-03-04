import useAuth from '../../../hooks/auth/useAuth';

interface LoginHocProps {
  WrappedComponent: React.ComponentType<any>;
}
function LoginHoc(props: LoginHocProps) {
  const { WrappedComponent } = props;

  const { handleSubmit, register, errors, isLoading } = useAuth();

  const loginData = {
    register,
    errors,
    isLoading,
    handleSubmit,
  };
  return <WrappedComponent {...loginData} />;
}

export default LoginHoc;
