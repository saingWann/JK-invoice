import axios from "axios";

export const api = axios.create({
    baseURL: 'https://6623acea3e17a3ac846fd683.mockapi.io/invoice/data/',
    timeout: 1000,
    headers: {'content-type':'application/json'}
  });
