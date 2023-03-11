import { NoticeDetail, ResponseInterface } from '../../types/api';
import client, { accessTokenAdd } from '../axios';

export async function getNoticeDetail(uuid: string, accessToken?: string) {
  const data = await client<ResponseInterface<NoticeDetail>>({
    method: 'GET',
    url: `/api/front/v1/pages/main/${uuid}/notice-detail`,
    headers: accessTokenAdd(undefined, accessToken),
  });

  return data.result;
}
