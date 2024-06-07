import axios from 'axios';

const axiosService  = axios.create({
    baseURL:'https://api.github.com'
});

axiosService.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
axiosService.defaults.headers.post['Content-Type'] = 'application/json';
export default axiosService;
