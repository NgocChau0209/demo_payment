import { api } from "./api";

function createBankAccountAPI() {
      return {
            getList: async () => {
                  let res = await api.get(`/bank-account`);
                  if (res.status === 200) {
                        return res.data.data;
                  }
            },
            add: async (data: any) => {
                  let params = {
                        accountHolder: data.name,
                        accountNumber: data.cardnumber,
                        type: data.type,
                        expiredate: data.expdate
                  }
                  const res = await api.post('/bank-account/add', params)
                  if (res.status === 200 && res.data.data) {
                        return true;
                  }
                  return false
            },
            getInfo: async (id: string) => {
                  let params = { id };
                  let res = await api.post(`/bank-account/info`, params);
                  if (res.status === 200 && res.data.data) {
                        return res.data.data.length ? res.data.data[0] : {};
                  }
            },
            modifyCard: async(data:any)=>{
                  let params = {
                        accountHolder: data.accountHolder,
                        accountNumber: data.accountNumber,
                        type: data.type,
                        expiredate: data.expiredate
                  }
                  const res = await api.post('/bank-account/modify-info', params)
                  if (res.status === 200 && res.data.data) {
                        return true;
                  }
                  return false
            }     

      }

}

export let bankAccountAPI = createBankAccountAPI();