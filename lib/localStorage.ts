import { Login } from '../types/api';

export function getStoredAccessToken() {
  const storedAccessToken = localStorage.getItem('accessToken');
  return storedAccessToken ? storedAccessToken : null;
}

export function setStoredUser(userToken: Login): void {
  localStorage.setItem('accessToken', userToken.access_token);
  localStorage.setItem('refreshToken', userToken.refresh_token);
}

export function clearStoredUser(): void {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
}
