import axios from "axios";
import { getItemLocalStorage } from "../module/storage";
getItemLocalStorage

// const baseURL='http://epayment-server/api/';

const baseURL = 'http://localhost:3032/api/';


export const api = axios.create({
      baseURL
})

// Set the AUTH token for any request
api.interceptors.request.use(function (config) {
      const token = getItemLocalStorage('token');
      config.headers.Authorization = token ? `Bearer ${token}` : '';
      return config;
});
