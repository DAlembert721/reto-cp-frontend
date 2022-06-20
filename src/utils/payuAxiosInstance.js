import axios from 'axios';

const payuAxiosInstance = axios.create({
    baseURL: 'https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    },
});

export default payuAxiosInstance;