//封装axios
import axios from 'axios'

//创建实例
const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 15000, //15秒
})
//请求拦截器
instance.interceptors.request.use(
    config => {
        config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
//响应拦截器
instance.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)
export default instance