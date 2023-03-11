import { NoticeDetail, ResponseInterface } from '../../types/api';
import client from '../axios';

export async function getNoticeDetail(uuid: string) {
  const data = await client<ResponseInterface<NoticeDetail>>({
    method: 'GET',
    url: `/api/front/v1/pages/main/${uuid}/notice-detail`,
  });

  return data.result;
}
