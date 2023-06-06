import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Replace with your backend URL
  withCredentials: true, // Include cookies in the requests
});

export default axiosInstance;
