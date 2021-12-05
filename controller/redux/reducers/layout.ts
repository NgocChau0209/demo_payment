import { setSideBar } from './../action/layout';
import { createReducer } from '@reduxjs/toolkit';

export const layoutReducer = createReducer([], {
      [setSideBar]: (state, action) => {
            return { ...state, sidebar: action.payload }
      }
});
