<template>
    <h1>Profile</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><router-link to="/">{{ $t('backHome') }}</router-link><span class="side2">&nbsp;</span>Profile</div>
        </div>
    </div>
    <div id="mainContents">
      <div class="content">
        <p>帐号：{{ info.username }}</p>
        <p>昵称：{{ info.realname }}</p>
        <p>邮箱：{{ info.email }}</p>
      </div>
    </div>
</template>

<script setup>
import useUserStore from '@/store/user'
import { ref } from 'vue'

const userStore = useUserStore()
const info = ref({})
info.value = userStore.userInfo
</script>