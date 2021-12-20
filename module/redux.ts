import { bankAccountAPI } from "services/card";
import { transactionAPI } from 'services/transaction';
import { setBankAccount } from "controller/redux/action/card";
import { store } from "controller/redux/store/configureStore";
import { setUserInfoAction } from "controller/redux/action/user";
import { setTransactionList } from 'controller/redux/action/transaction';

export const getBankAccountListRedux = async () => {
  let data = await bankAccountAPI.getList();
  store.dispatch(setBankAccount(data));
};

export const getTransactionListRedux = async () =>{
  let list = await transactionAPI.getAll();
  store.dispatch(setTransactionList(list));
}

export const setUserInfoRedux = async (data) => {
  store.dispatch(setUserInfoAction(data));
};
