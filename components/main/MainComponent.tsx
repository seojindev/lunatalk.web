import Main from './view/Main';
import MainHoc from './hoc/MainHoc';

function MainComponent() {
  return <MainHoc WrappedComponent={Main} />;
}

export default MainComponent;
