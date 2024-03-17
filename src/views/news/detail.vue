<template>
    <h1>{{ $t('news.title') }}</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><router-link to="/">{{ $t('backHome') }}</router-link><span class="side2">&nbsp;</span>
                <router-link to="/news">{{ $t('news.title') }}</router-link><span class="side2">&nbsp;</span>詳細內容
            </div>
        </div>
    </div>
    <div id="mainContents">
        <!-- ? 表示如果后续的属性不存在了 就不获取了 -->
        <h2>{{ info.name }}</h2>
        {{ info.content }}
        <div class="files">
            <ul>
                <li class="iconPDF"></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import useNewsDetail from '@/composables/useNewsDetail'
import { useRoute } from 'vue-router'

const route = useRoute()
let data = {
    'id': route.params.id,
}
const { info } = useNewsDetail(data)
</script>