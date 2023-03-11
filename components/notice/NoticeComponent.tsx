import NoticeHoc from './hoc/noticeHoc';
import Notice from './view/Notice';

function NoticeComponent() {
  return <NoticeHoc WrappedComponent={Notice} />;
}

export default NoticeComponent;
