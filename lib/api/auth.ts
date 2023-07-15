import {
  Login,
  PhoneAuth,
  PhoneAuthConfirm,
  Register,
  RegisterRequest,
  ResponseInterface,
} from '../../types/api';
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

export async function signUp(registerInfo: RegisterRequest) {
  const data = await client<ResponseInterface<Register>>({
    method: 'POST',
    url: '/api/front/v1/auth/register',
    body: {
      auth_index: registerInfo.authIndex,
      user_id: registerInfo.userId,
      user_password: registerInfo.userPassword,
      user_password_confirm: registerInfo.userPasswordConfirm,
      user_name: registerInfo.userName,
      user_email: registerInfo.userEmail + '@' + registerInfo.userEmailAddress,
      user_select_email: registerInfo.userSelectEmail ? 'Y' : 'N',
      user_select_message: registerInfo.userSelectMessage ? 'Y' : 'N',
    },
  });

  return data.result;
}

export async function phoneAuth(phoneNumber: string) {
  const data = await client<ResponseInterface<PhoneAuth>>({
    method: 'GET',
    url: `/api/front/v1/auth/${phoneNumber}/phone-auth`,
  });

  return data.result;
}

export async function phoneAuthConfirm(authIndex: number, authCode: string) {
  const data = await client<ResponseInterface<PhoneAuthConfirm>>({
    method: 'POST',
    url: `/api/front/v1/auth/${authIndex}/phone-auth-confirm`,
    body: {
      auth_code: authCode,
    },
  });

  return data.result;
}

export async function findLoginId(email: string) {
  const data = await client<ResponseInterface<undefined>>({
    method: 'POST',
    url: '/api/front/v1/auth/findId',
    body: {
      email,
    },
  });

  return data;
}

export async function findPassword(email: string, loginId: string) {
  const data = await client<ResponseInterface<undefined>>({
    method: 'POST',
    url: '/api/front/v1/auth/resetPassword',
    body: {
      email,
      login_id: loginId,
    },
  });

  return data;
}
