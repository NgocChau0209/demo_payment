import { CHECKLOGIN, SETUSERINFO } from './../action/user';
import { createReducer } from '@reduxjs/toolkit';

export const userReducer = createReducer({ isLogin: false }, {
      [CHECKLOGIN]: (state,action) => {
            console.log({ ...state, isLogin: action.payload });
            return { ...state, isLogin: action.payload };
      },
      [SETUSERINFO]: (state, action) => {
            return { ...state, info: action.payload }
      },

})

