import axios from 'axios'

const api = axios.create({
    baseURL: 'https://vendas-69b04-default-rtdb.firebaseio.com/'
})

export default api;