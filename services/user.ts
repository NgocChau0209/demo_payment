import { api } from "./api";
import { saveItemLocalStorage } from "module/storage";
import IUser from 'interface/User';

function createUserAPI() {
      return {
            checkPhoneNumber: async (phoneNumber: string) => {
                  let res = await api.post(`user/check-phone-number`, { phoneNumber });
                  if (res.status === 200) {
                        return res.data.data.isExist;
                  }
                  return null;
            },
            signUp: async (data: IUser) => {
                  let { phoneNumber, password, userName } = data
                  let params = {
                        phoneNumber,
                        password,
                        userName
                  }
                  let res = await api.post(`user/create`, params);
                  return res.data.success;

            },
            login: async (data: IUser) => {
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

            },
            getProfile: async ()=>{
                  let res = await api.post(`user`);
                  console.log('hello')
                  if (res.status === 200 && res.data) {
                        return res.data.data;
                  }
                  return null;
            }
      }

}

export let userAPI = createUserAPI();