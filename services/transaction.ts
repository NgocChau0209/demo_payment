import { api } from "./api";

function createTransactionAPI() {
      return {
            createLink: async (data) => {
                  let { amount = 0, message = '' } = data
                  let params = {
                        amount,
                        message
                  }
                  let res = await api.post('transaction/create-link',
                        params
                  )
                  if (res.status === 200 && res.data.data) {
                        return res.data.data.token;
                  }
            },
            depositLinkInfo: async (token: string) => {
                  let params = {
                        token
                  }
                  let res = await api.post('transaction/deposit-info',
                        params
                  )
                  if (res.status === 200 && res.data) {

                        return res.data.data;
                  }
            },
            deposit: async ({ amount, to, from, message = "", token = "" }) => {
                  let params = {
                        from,
                        amount,
                        to,
                        message,
                        token
                  }
                  let res = await api.post('transaction/deposit',
                        params
                  )
                  return res.data
            },
            getAll: async () => {
                  let res = await api.get('transaction');
                  if(res.status ===200 && res.data){
                        return res.data.data;
                  }
                  return [];
            }
      }

}

export let transactionAPI = createTransactionAPI();