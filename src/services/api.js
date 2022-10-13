import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_URL,
    timeout: 1000,
    headers: {'Content-Type': 'application/json'},
})

export {instance}