import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://ec2-3-138-85-219.us-east-2.compute.amazonaws.com:8080/cp/v1',
    headers: {},
});

export default axiosInstance;