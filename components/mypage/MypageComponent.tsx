import MyPageHoc from './hoc/MyPageHoc';
import Mypage from './view/Mypage';
import text from '../../test';

function MypageComponent() {
  return <MyPageHoc WrappedComponent={Mypage} />;
}

export default MypageComponent;
