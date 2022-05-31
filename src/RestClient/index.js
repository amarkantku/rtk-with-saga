import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_RANDOM_USER_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
