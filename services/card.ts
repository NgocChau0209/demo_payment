import { api } from "./api";

function createBankAccountAPI() {
      return {
            getList: async () => {
                  let res = await api.get(`/service/bank`);
                  if (res.status === 200) {
                        return res.data.data;
                  }
            },

      }

}

export let bankAccountAPI = createBankAccountAPI();