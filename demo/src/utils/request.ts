import axios from 'axios'

const request = axios.create({
    baseURL: 'http://111.230.89.67:82',
    timeout: 5000,
})

export default request
