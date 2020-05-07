import axios from 'axios';
import origin from './origin';

export default axios.create({
    baseURL: origin + '/api',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "GET, HEAD, PUT, PATCH, POST, DELETE"
    }
});
