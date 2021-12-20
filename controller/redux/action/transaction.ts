import { createAction } from "@reduxjs/toolkit";

export const SETRANSACTIONTLIST = "transaction/setList";
export const setTransactionList = createAction(SETRANSACTIONTLIST);

export const CURTRANSACTIONACCOUNT = "transaction/currentItem";
export const getCurrentTransaction = createAction(CURTRANSACTIONACCOUNT)