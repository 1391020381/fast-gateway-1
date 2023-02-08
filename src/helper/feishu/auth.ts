
import { APP_ID, APP_SECRET } from './const';

import { methodV } from 'src/utils/request';

export type GetAppTokenRes = {
  code: number;
  msg: string;
  app_access_token: string;
  expire: number;
};
/**
 * 获取 user_access_token
 * @param 
 * @returns 
 */
export const getUserToken = async ({ code, app_token }) => {
  const { data } = await methodV({
    url: `/authen/v1/access_token`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${app_token}`,
    },
    params: {
      grant_type: 'authorization_code',
      code,
    },
  });
  return data;
};

/**
 * 刷新 user_access_token
 * @param 
 * @returns 
 */
// user_access_token 的最大有效期是 6900 秒。当 user_access_token 过期时，可以调用本接口获取新的 user_access_token
export const refreshUserToken = async ({ refreshToken, app_token }) => {
  const { data } = await methodV({
    url: `/authen/v1/refresh_access_token`,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${app_token}`,
    },
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      app_token,
    },
  });
  return data;
};

export const getUserAccessToken = async (code) => {
  const { data } = await methodV({
    url: `/suite/passport/oauth/token`,
    method: 'POST',
    params: {
      grant_type: 'authorization_code',
      code,
      app_id: APP_ID,
      app_secret: APP_SECRET,
    },
  });
  return data as GetAppTokenRes;
};


export const getAppToken = async () => {
  const { data } = await methodV({
    url: `/auth/v3/app_access_token/internal`,
    method: 'POST',
    params: {
      app_id: APP_ID,
      app_secret: APP_SECRET,
    },
  });
  return data as GetAppTokenRes;
};
