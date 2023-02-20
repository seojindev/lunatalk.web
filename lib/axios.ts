import axios, { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';
import { Error } from '../types/api';
import { getStoredAccessToken } from './localStorage';

const axiosDefualtHeader: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Request-Client-Type': process.env.NEXT_PUBLIC_CLIENT_CODE || '',
    Accept: 'application/json',
    Authorization: '',
  },
};

const instance = axios.create(axiosDefualtHeader);

// const accessToken = getStoredAccessToken();

// instance.defaults.headers['Authorization'] = 'Bearer ' + accessToken;

const attachTokenToRequest = (
  request: AxiosRequestConfig,
  accessToken: any,
) => {
  console.log(request);

  if (request.headers) {
    request.headers['Authorization'] = 'Bearer ' + accessToken;
  }
};

export default async function client<T extends Error>({
  url,
  method,
  body,
  headers,
}: {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: { [key: string]: any };
  headers?: { [key: string]: any };
}): Promise<T> {
  try {
    const options: AxiosRequestConfig = {
      url,
      method,
      data: body,
      headers,
    };
    const accessToken = getStoredAccessToken();
    console.log(accessToken);

    attachTokenToRequest(options, accessToken);
    console.log(options);

    const { data } = await instance.request<T>(options);

    return data;
  } catch (e: any) {
    toast.warning(e.response.data.error_message);
    console.log(e);
    return e;
  }
}
