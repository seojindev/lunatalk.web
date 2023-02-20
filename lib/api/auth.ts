import client from '../axios';

export function login(loginId: string, password: string) {
  return client({
    method: 'POST',
    url: '/api/front/v1/auth/login',
    body: {
      login_id: loginId,
      login_password: password,
    },
  });
}
