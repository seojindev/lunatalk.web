import { useRouter } from 'next/router';
import useNoticeDetailQuery from '../../../hooks/query/useNoticeDetailQuery';
import { NoticeDetail } from '../../../types/api';

export interface NoticeData {
  detail?: NoticeDetail;
}

interface NoticeHocProps {
  WrappedComponent: React.ComponentType<NoticeData>;
}

function NoticeHoc(props: NoticeHocProps) {
  const { WrappedComponent } = props;
  const router = useRouter();
  const { uuid } = router.query;
  const noticeId: any = uuid;
  const { noticeData: data } = useNoticeDetailQuery(noticeId);

  const noticeData: NoticeData = {
    detail: data,
  };

  return <WrappedComponent {...noticeData} />;
}

export default NoticeHoc;
