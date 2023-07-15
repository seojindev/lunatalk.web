import FindLoginIdHoc from './hoc/FindLoginIdHoc';
import Find from './view/Find';

function FindLoginIdComponent() {
  return <FindLoginIdHoc WrappedComponent={Find} />;
}

export default FindLoginIdComponent;
