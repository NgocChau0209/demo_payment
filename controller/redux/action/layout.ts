import { createAction, createSlice } from "@reduxjs/toolkit";

export const SETSIDEBAR = 'layout/sidebar';
export const setSideBar = createAction(SETSIDEBAR);

// const layoutSlice = createSlice({
//       name: 'layout',
//       initialState: {},
//       reducers: {
//             setSideBar: (state, action) => {
//                   return { ...state, sidebar: action.payload }
//             }
//       }
// })
// export const { setSideBar } = layoutSlice.actions
// export const layoutReducer = layoutSlice.reducer;