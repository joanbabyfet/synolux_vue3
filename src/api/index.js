//这里统一管理所有接口
import request from '../utils/request'

//获取新闻列表
export const getNews = (params) => {
    return request.get('/example', {params: params})
}

//获取新闻详情
export const getNewsInfo = (params) => {
    return request.get('/example/detail', {params: params})
}

//登录
export const login = (params) => {
    return request.post('/login', params)
}

//获取验证码
export const getCaptcha = (params) => {
    return request.get('/get_captcha', {params: params})
}

//修改密码
export const editPwd = (params) => {
    return request.post('/edit_pwd', params)
}
