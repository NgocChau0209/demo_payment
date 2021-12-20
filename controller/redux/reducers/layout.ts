import { SETEXTENDSIDEBAR } from './../action/layout';
import { createReducer } from '@reduxjs/toolkit';
import { SETLOADING, SETSIDEBAR } from 'controller/redux/action/layout';

export const layoutReducer = createReducer([], {
      [SETSIDEBAR]: (state, action) => {
            return { ...state, sidebar: action.payload }
      },
      [SETLOADING]: (state, action) => {
            return { ...state, isLoading: action.payload }
      },
      [SETEXTENDSIDEBAR]:(state) => {
            return { ...state, isExtendSidebar: !(state.isExtendSidebar ?? true) }
      },
});
