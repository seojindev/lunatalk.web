import axios, { AxiosRequestConfig } from 'axios';

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

export default function client({
  url,
  method,
  body: data,
  headers,
}: {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: { [key: string]: any };
  headers?: { [key: string]: any };
}) {
  instance
    .request({ url, method, data, headers })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
