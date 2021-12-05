import { createAction } from '@reduxjs/toolkit';

export const CHECKLOGIN = 'user/check-login';
export const checkLoginAction = createAction(CHECKLOGIN);

export const SETUSERINFO = 'user/info';
export const setUserInfoAction = createAction(SETUSERINFO);

