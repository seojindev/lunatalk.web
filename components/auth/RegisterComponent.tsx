import RegisterHoc from './hoc/RegisterHoc';
import Register from './view/Register';

function RegisterComponent() {
  return <RegisterHoc WrappedComponent={Register} />;
}

export default RegisterComponent;
