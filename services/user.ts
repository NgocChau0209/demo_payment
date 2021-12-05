import { saveItemLocalStorage } from "../module/storage";
import { api } from "./api";
import axios from "axios";

function createUserAPI() {
      return {
            checkEmailExist: async (email: string) => {
                  let res = await api.post(`user/check-email`, { email });
                  if (res.status === 200) {
                        return res.data.message
                  }
                  // return res.message;
            },
            checkPhoneNumber: async (phoneNumber: string) => {
                  let res = await api.post(`user/check-phone-number`, { phoneNumber });
                  if (res.status === 200) {
                        return res.data.data;
                  }
                  return null;
            },
            signUp: async (data: any) => {
                  let { phoneNumber, password, userName } = data
                  let params = {
                        phoneNumber,
                        password,
                        userName
                  }
                  let res = await api.post(`user/create`, params);
                  return res.data.success;

            },
            login: async (data: any) => {
                  let { phoneNumber, password } = data
                  let params = {
                        phoneNumber,
                        password
                  }
                  let res = await api.post(`user/login`, params);
                  if (res.status === 200 && res.data) {
                        let { token, userInfo } = res.data;
                        saveItemLocalStorage('token', token);
                        return userInfo;
                  }
                  return null;

            }
      }

}

export let userAPI = createUserAPI();