import axios from 'axios';

const api = axios.create({
    baseURL: 'http://doit-web-app-com.umbler.net'
});

export default api;