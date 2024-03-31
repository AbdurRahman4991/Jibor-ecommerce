import axios from 'axios';

const baseAxios = axios.create({
    baseURL: "https://backend.halalfashion.net/api/",
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});
export default baseAxios;