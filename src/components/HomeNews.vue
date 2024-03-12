<template>
    <div class="newsC">
        <ul>
            <li v-for="item in news" :key="item.id">
                <router-link :to="`/news/${item.id}`">{{ item.name }}</router-link>
            </li>
        </ul>
        <div class="more"><router-link to="/news"><img src="@/assets/images/iconNewsMore.gif" alt="more" width="34" height="10" border="0" /></router-link></div>
    </div>
</template>

<script setup>
import useNews from '@/composables/useNews'

const { news } = useNews({
    params: `{"page":1,"page_size":2}`
})
</script>