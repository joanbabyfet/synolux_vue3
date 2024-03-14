<template>
    <div class="newsC">
        <ul>
            <li v-for="item in news" :key="item.id">
                <router-link :to="`/news/${item.id}`">{{ _.truncate(item.name, {length: 15}) }}</router-link>
            </li>
        </ul>
        <div class="more"><router-link to="/news"><img src="@/assets/images/iconNewsMore.gif" alt="more" width="34" height="10" border="0" /></router-link></div>
    </div>
</template>

<script setup>
import useNews from '@/composables/useNews'
import _ from 'lodash-es' //引入全部方法

const { news } = useNews({
    params: `{"page":1,"page_size":2}`
})
</script>