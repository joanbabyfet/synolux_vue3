//封装axios
import axios from 'axios'
import useUserStore from '@/store/user'

//创建实例
const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 15000, //15秒
})
//请求拦截器
instance.interceptors.request.use(
    config => {
        //config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')

        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况，此处token一般是用户完成登录后储存到localstorage里的
        let language = localStorage.getItem('language')
        if(language) {
            config.headers['language'] = language
        }

        const userStore = useUserStore()
        if(userStore.token) {
            config.headers['Authorization'] = 'Bearer ' + userStore.token
        }
        console.log('请求参数:', config) //打印日志
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
//响应拦截器
instance.interceptors.response.use(
    response => {
        console.log('返回结果:', response) //打印日志
        return response.data
    },
    error => {
        console.log('返回错误:', error) //打印日志
        return Promise.reject(error)
    }
)
export default instance