import { setBankAccount } from "../controller/redux/action/card";
import { store } from "../controller/redux/store/configureStore";
import { bankAccountAPI } from "../services/card";
import { setUserInfoAction } from "../controller/redux/action/user";

export const getBankAccountListRedux = async () => {
  let data = await bankAccountAPI.getList();
  store.dispatch(setBankAccount(data));
};

export const setUserInfoRedux = async (data) => {
  store.dispatch(setUserInfoAction(data));
};

export let userInfoRedux = (state) => {
  return state.user;
};
