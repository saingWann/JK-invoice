import axios from "axios";

export const api = axios.create({
    baseURL: 'https://665ef3081e9017dc16f227ec.mockapi.io/api/v1',
    headers: {'content-type':'application/json'}
  });


  // working api https://6623acea3e17a3ac846fd683.mockapi.io/invoice/data/

  // https://665ef3081e9017dc16f227ec.mockapi.io/api/v1/records