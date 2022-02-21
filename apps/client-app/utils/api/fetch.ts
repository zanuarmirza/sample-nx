/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { axiosApp } from '../axios';

/**
 * Helper for axios which automatically returns the JSON.
 *
 * @param config Base request config for axios.
 */
export default async function fetcher<TResponse = any>({
  url,
  data,
  method,
  headers,
  ...config
}: AxiosRequestConfig): Promise<TResponse> {
  const res: AxiosResponse<TResponse> = await axiosApp({
    url,
    data,
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...headers,
    },
    ...config,
  });
  const response: TResponse = res.data;
  return response;
}
