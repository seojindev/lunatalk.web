import { Login, ResponseInterface } from '../../types/api';
import client from '../axios';

export async function login(loginId: string, password: string) {
  const data = await client<ResponseInterface<Login>>({
    method: 'POST',
    url: '/api/front/v1/auth/login',
    body: {
      login_id: loginId,
      login_password: password,
    },
  });
  return data.result;
}
