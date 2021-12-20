import axios from "axios";
import { getItemLocalStorage } from "module/storage";

const baseURL='https://epayment-server.kytek.io/api';

// const baseURL = 'http://localhost:9988/api/';


export const api = axios.create({
      baseURL
})

// Set the AUTH token for any request
api.interceptors.request.use(function (config:any) {
      const token = getItemLocalStorage('token');
      config.headers.Authorization = token ? `Bearer ${token}` : '';
      return config;
});
