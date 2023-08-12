import MyPageHoc from './hoc/MyPageHoc';
import Mypage from './view/Mypage';

function MypageComponent() {
  return <MyPageHoc WrappedComponent={Mypage} />;
}

export default MypageComponent;
