'use client';

import type { AxiosInstance } from 'axios';
import axios from 'axios';

import { getApiURL } from '../get-server-url';

const BASE_API: AxiosInstance = axios.create({
  baseURL: getApiURL(),
  responseType: 'json',
  withCredentials: true,
});




// TODO: Take from localstorage
// const requestInterceptor = async (config: AxiosRequestConfig): Promise<any> => {
//   const accessToken = getAccessToken();
//
//   if (accessToken) {
//     config.headers = {
//       ...config.headers,
//       Authorization: `Bearer ${accessToken}`,
//     };
//   }
//
//   return config;
// };
//
// const requestErrorInterceptor = (error: AxiosError): Promise<never> => {
//   return Promise.reject(error);
// };
//
// BASE_API.interceptors.request.use(requestInterceptor, requestErrorInterceptor);

export { BASE_API };
