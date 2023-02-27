import LoginHoc from './hoc/LoginHoc';
import Login from './view/Login';

function LoginComponent() {
  return <LoginHoc WrappedComponent={Login} />;
}

export default LoginComponent;
