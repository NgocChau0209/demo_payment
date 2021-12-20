import { createReducer } from '@reduxjs/toolkit';
import { SETRANSACTIONTLIST, CURTRANSACTIONACCOUNT } from "controller/redux/action/transaction";

export const transactionReducer = createReducer({}, {
      [SETRANSACTIONTLIST]: (state, action) => {
            return { ...state, list: action.payload }
      },
      [CURTRANSACTIONACCOUNT]: (state, action) => {
            return { ...state, currentCard: action.payload }
      },

})