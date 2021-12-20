import { createAction } from "@reduxjs/toolkit";

export const SETSIDEBAR = 'layout/sidebar';
export const setSideBar = createAction(SETSIDEBAR);

export const SETLOADING = "layout/loading";
export const setLoading = createAction(SETLOADING);

export const SETEXTENDSIDEBAR = "layout/extend";
export const setExtendSidebar = createAction(SETEXTENDSIDEBAR);