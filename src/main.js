//这里为入口文件
import { createApp } from 'vue'
import App from './App.vue'
//引入路由文件
import router from './router'
//引入css公共样式
import './assets/css/style.css' 
//引入公共布局
import layout_default from './layouts/default.vue'
import layout_home from './layouts/home.vue'
//引入i18n配置文件
import i18n from './lang/index'
//引入element plus组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入全局方法
import { goUrl, sliceWord } from './utils/common'

const app = createApp(App)
//定义全局变量
app.config.globalProperties.$goUrl = goUrl
app.config.globalProperties.$sliceWord = sliceWord
app.use(i18n)
app.use(ElementPlus)
app.component('layout_home', layout_home) //首页布局
app.component('layout_default', layout_default) //内页布局
app.use(router)

//在 src/main.js 內引用 App.vue ，然後渲染到 public/index.html 
app.mount('#app')
