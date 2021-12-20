import { createReducer } from '@reduxjs/toolkit';
import { SETBANKACCOUNTLIST, CURRENTBANKACCOUNT } from "controller/redux/action/card";

export const cardReducer = createReducer({}, {
      [SETBANKACCOUNTLIST]: (state, action) => {
            return { ...state, list: action.payload }
      },
      [CURRENTBANKACCOUNT]: (state, action) => {
            return { ...state, currentCard: action.payload }
      },

})