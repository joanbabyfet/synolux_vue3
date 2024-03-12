//这里统一管理所有接口
import axios from '../utils/request'

//获取新闻列表
export const getNews = (params) => axios('/v1/example/index', { 
    method: 'GET',
    params: params,
})
//获取新闻详情
export const getNewsDetail = (params) => axios('/v1/example/show', {
    method: 'GET',
    params: params,
})
