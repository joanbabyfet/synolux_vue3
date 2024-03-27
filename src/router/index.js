import { createRouter, createWebHistory } from 'vue-router'
//进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 导入路由组件
import home from '@/views/index.vue'
import about from '@/views/about.vue'
import news from '@/views/news/index.vue'
import news_detail from '@/views/news/detail.vue'
import products from '@/views/products/index.vue'
import products2 from '@/views/products/2.vue'
import products3 from '@/views/products/3.vue'
import products4 from '@/views/products/4.vue'
import products5 from '@/views/products/5.vue'
import service from '@/views/service.vue'
import contact from '@/views/contact.vue'
import not_found from '@/views/404.vue'
import maintenance from '@/views/maintenance.vue'
import test from '@/views/test.vue'
import login from '@/views/login.vue'
import edit_pwd from '@/views/edit_pwd.vue'
import profile from '@/views/profile.vue'
import useUserStore from '../store/user'

// 定义路由，每个路由都需要映射到一个组件
const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            layout: 'layout_home',
        },
        component: home,
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            layout: 'layout_default',
            title: '興溢股份有限公司 关于我们',
        },
        component: about,
    },
    {
        path: '/news',
        name: 'news',
        meta: {
            layout: 'layout_default',
        },
        component: news,
    },
    {
        path: '/news/:id',
        name: 'news_detail',
        meta: {
            layout: 'layout_default',
        },
        component: news_detail,
    },
    {
        path: '/products',
        name: 'products',
        meta: {
            layout: 'layout_default'
        },
        component: products,
    },
    {
        path: '/products/2',
        name: 'products2',
        meta: {
            layout: 'layout_default'
        },
        component: products2,
    },
    {
        path: '/products/3',
        name: 'products3',
        meta: {
            layout: 'layout_default'
        },
        component: products3,
    },
    {
        path: '/products/4',
        name: 'products4',
        meta: {
            layout: 'layout_default'
        },
        component: products4,
    },
    {
        path: '/products/5',
        name: 'products5',
        meta: {
            layout: 'layout_default'
        },
        component: products5,
    },
    {
        path: '/service',
        name: 'service',
        meta: {
            layout: 'layout_default'
        },
        component: service,
    },
    {
        path: '/contact',
        name: 'contact',
        meta: {
            layout: 'layout_default'
        },
        component: contact,
    },
    {
        // 404功能的路由建立
        path: '/:pathMatch(.*)',
        name: 'not_found',
        meta: {
            layout: 'layout_custom'
        },
        component: not_found,
    },
    {
        path: '/maintenance',
        name: 'maintenance',
        meta: {
            layout: 'layout_custom'
        },
        component: maintenance,
    },
    {
        path: '/test',
        name: 'test',
        meta: {
            layout: 'layout_default'
        },
        component: test,
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            layout: 'layout_default'
        },
        component: login,
    },
    {
        path: '/edit_pwd',
        name: 'edit_pwd',
        meta: {
            layout: 'layout_default',
            requireAuth: true
        },
        component: edit_pwd,
    },
    {
        path: '/profile',
        name: 'profile',
        meta: {
            layout: 'layout_default',
            requireAuth: true
        },
        component: profile,
    },
]

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
    history: createWebHistory(),
    routes,
})

//进度条配置
NProgress.configure({
    showSpinner: true //右上角显示转旋图标
})

//全局路由前置守卫
router.beforeEach((to, from, next) => {
    NProgress.start() // start progress bar
    if(to.meta.title) {
        document.title = to.meta.title
    }

    //检测权限
    const userStore = useUserStore()
    const token = userStore.token
    if (to.meta.requireAuth) {
        if(token) {
            next()
        }
        else {
            next({ name: 'login' })
        }
    }
    else {
        if (to.path == '/login' && token) {
            next({ name: 'profile' })
        }
        else {     
            next()
        }
    }
})

router.afterEach(() => {
    NProgress.done() // finish progress bar
})

// 导出路由实例，并在 `main.js` 挂载
export default router