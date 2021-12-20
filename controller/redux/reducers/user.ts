import { createReducer } from '@reduxjs/toolkit';
import { CHECKLOGIN, SETUSERINFO } from 'controller/redux/action/user';

export const userReducer = createReducer({ isLogin: false }, {
      [CHECKLOGIN]: (state, action: { payload: boolean }) => {
            return { ...state, isLogin: action.payload };
      },
      [SETUSERINFO]: (state, action: { payload: any }) => {
            return { ...state, info: action.payload }
      },

})

