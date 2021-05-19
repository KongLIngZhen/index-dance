import axios from 'axios';

const http = axios.create({
    baseURL: 'http://push2.eastmoney.com/',
    timeout: 5000,
    headers: {
        ContentType: 'application/javascript; charset=UTF-8'
    }
})

const http2 = axios.create({
    baseURL: 'http://fund.eastmoney.com',
    timeout: 5000,
    headers: {
        referer: 'http://fund.eastmoney.com/data/fundranking.html',
    }
})

const http3 = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
    headers: {
        ContentType: 'application/json'
    }
})

export {
    http,
    http2,
    http3
}