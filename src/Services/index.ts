import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data',
    headers: {
        authorization: `Apikey ${process.env.REACT_APP_CRYPTO_COMPARE_KEY}`
    }
})