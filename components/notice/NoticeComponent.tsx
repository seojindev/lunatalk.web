import NoticeHoc from './hoc/NoticeHoc';
import Notice from './view/Notice';

function NoticeComponent() {
  return <NoticeHoc WrappedComponent={Notice} />;
}

export default NoticeComponent;
