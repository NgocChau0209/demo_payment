import { createReducer } from '@reduxjs/toolkit';
import { setBankAccount, getCurrentBankAccount } from "../action/card";

export const cardReducer = createReducer({}, {
      [setBankAccount]: (state, action) => {
            return { ...state, list: action.payload }
      },
      [getCurrentBankAccount]: (state, action) => {
            return { ...state, currentCard: action.payload }
      }
})