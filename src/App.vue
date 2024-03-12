<template>
  <component :is="$route.meta.layout || layout">
    <router-view></router-view>
  </component>
</template>

<script setup>
//:is 态显示需要的组件
const layout = 'layout_default'
//打印当前环境
//console.log(process.env.NODE_ENV)
</script>

