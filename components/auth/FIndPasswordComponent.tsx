import FindPasswordHoc from './hoc/FindPasswordHoc';
import Find from './view/Find';

function FindPasswordComponent() {
  return <FindPasswordHoc WrappedComponent={Find} />;
}

export default FindPasswordComponent;
