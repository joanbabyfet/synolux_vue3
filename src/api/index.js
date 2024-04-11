//这里统一管理所有接口
import request from '../utils/request'

//获取新闻列表
export const getNews = (params, headers) => {
    console.log(params)
    return request.get('/v1/article', {params: params}, { headers })
}

//获取新闻详情
export const getNewsInfo = (params, headers) => {
    return request.get(`/v1/article/detail`, {params: params}, { headers })
}

//登录
export const login = (params, headers) => {
    return request.post('/v1/login', params, { headers })
}

//注册
export const register = (params, headers) => {
    return request.post('/v1/register', params, { headers })
}

//用户设置
export const profile = (params, headers) => {
    return request.post('/v1/profile', params, { headers })
}

//获取验证码
export const getCaptcha = (params, headers) => {
    return request.get('/v1/captcha', {params: params}, { headers })
}

//修改密码
export const editPwd = (params, headers) => {
    return request.post('/v1/edit_pwd', params, { headers })
}
