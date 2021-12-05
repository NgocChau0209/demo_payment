import { createAction } from "@reduxjs/toolkit";

export const SETBANKACCOUNTLIST = "card/setList";
export const setBankAccount = createAction(SETBANKACCOUNTLIST);

export const CURRENTBANKACCOUNT = "card/currentItem";
export const getCurrentBankAccount = createAction(CURRENTBANKACCOUNT)