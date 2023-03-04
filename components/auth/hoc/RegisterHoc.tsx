import useRegister from '../../../hooks/auth/useRegister';

interface LoginHocProps {
  WrappedComponent: React.ComponentType<any>;
}

function RegisterHoc(props: LoginHocProps) {
  const { WrappedComponent } = props;

  const registerData = { ...useRegister() };

  return <WrappedComponent {...registerData} />;
}

export default RegisterHoc;
