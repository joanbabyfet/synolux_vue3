//封装axios
import axios from 'axios'

//创建实例
const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL
})
export default instance