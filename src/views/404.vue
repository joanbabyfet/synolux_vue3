<template>
    <div class="middle-box text-center animated fadeInDown">
        <h1>404</h1>
        <h3 class="font-bold">页面未找到！</h3>

        <div class="error-desc">
            <p>抱歉，页面好像去火星了~ </p>
            <button class="btn btn-primary" @click="go">Go back home</button>
        </div>
    </div>
</template>

<script setup>
//引入样式
import '@/assets/css/style.min.css'
import '@/assets/css/animate.min.css' 
import router from '../router'

const go = () => {
    router.push('/') //跳转回首页
}

//3秒后跳转到首页, router.push会留下历史记录, router.replace则不会
setTimeout(()=>{
  router.push('/')
}, 3000)
</script>
