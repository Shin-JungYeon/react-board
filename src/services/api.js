import axios from 'axios';
import {BASE_URL} from './url'

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: {'Content-Type': 'application/json'},
})

export {instance}