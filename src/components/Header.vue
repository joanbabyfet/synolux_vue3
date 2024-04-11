<template>
    <div id="top"><router-link to="/"><img class="topLogo" src="@/assets/images/spacer.gif" alt="logo" name="idxTopLogo" width="205" height="30" border="0" /></router-link>
        <div class="nav" v-show="JSON.stringify(userStore.userInfo) === '{}'">
            <router-link to="/login">登录</router-link><span class="side">&nbsp;</span>
            <router-link to="/register">注册</router-link><span class="side">&nbsp;</span>
            <router-link to="" @click="setLang('en')">English</router-link><span class="side">&nbsp;</span>
            <router-link to="" @click="setLang('cn')">中文</router-link>
        </div>
        <div class="nav" v-show="JSON.stringify(userStore.userInfo) !== '{}'">
            <router-link to="/profile">Hi {{ userStore.userInfo.username }}</router-link><span class="side">&nbsp;</span>
            <router-link to="/edit_pwd">修改密码</router-link><span class="side">&nbsp;</span>
            <router-link to="" @click="logout()">退出</router-link><span class="side">&nbsp;</span>
            <router-link to="" @click="setLang('en')">English</router-link><span class="side">&nbsp;</span>
            <router-link to="" @click="setLang('cn')">中文</router-link>
        </div>
    </div>
    <div id="HeaderNavIdx">
        <div id="innerHeaderNavIdx">
            <ul>
                <li><router-link to="/" active-class="current">{{ $t('backHome') }}</router-link></li>
                <li><router-link to="/about" active-class="current">{{ $t('nav.about') }}</router-link></li>
                <li><router-link to="/news" active-class="current">{{ $t('nav.news') }}</router-link></li>
                <li><router-link to="/products" active-class="current">{{ $t('nav.products') }}</router-link></li>
                <li><router-link to="/service" active-class="current">{{ $t('nav.service') }}</router-link></li>
                <li><router-link to="/contact" active-class="current">{{ $t('nav.contact') }}</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import useUserStore from '../store/user'
import router from '../router'
import { useI18n } from "vue-i18n"

const { locale } = useI18n()
//切換語言
function setLang(lang) {
    locale.value = lang //实时切换
    localStorage.setItem('language', lang)
}

//退出
const userStore = useUserStore()
function logout() {
    userStore.logout()
    //跳转到登录页
    router.push('/login') 
}
</script>