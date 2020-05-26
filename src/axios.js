import axios from 'axios';
import origin from './origin';

export default axios.create({
    baseURL: origin + '/api',
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true
});
