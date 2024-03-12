<template>
    <h1>{{ $t('news.title') }}</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><router-link to="/">{{ $t('backHome') }}</router-link><span class="side2">&nbsp;</span>{{ $t('news.title') }}</div>
        </div>
    </div>
    <div class="newsList">
        <ul>
            <li v-for="item in news" :key="item.id">
                <router-link :to="`/news/${item.id}`">{{ item.name }}</router-link>
            </li>
        </ul>
        <!-- <p>目前無最新訊息...</p> -->
    </div>
    
</template>

<script setup>
import useNews from '@/composables/useNews'

const { news } = useNews({
    params: `{"page":1,"page_size":10}`
})
</script>
