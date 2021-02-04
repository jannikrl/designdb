import axios_ from 'axios';

export const axios = axios_.create({
    baseURL: process.env.REACT_APP_API_URL
});