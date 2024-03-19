<template>
    <div class="newsC">
        <ul>
            <li v-for="item in list" :key="item.id">
                <!-- <router-link :to="`/news/${item.id}`">{{ _.truncate(item.name, {length: 15}) }}</router-link> -->
                <router-link :to="`/news/${item.id}`">{{ $sliceWord(item.name, 20) }}</router-link>
            </li>
        </ul>
        <div class="more"><router-link to="/news"><img src="@/assets/images/iconNewsMore.gif" alt="more" width="34" height="10" border="0" /></router-link></div>
    </div>
</template>

<script setup>
import useHomeNews from '@/composables/useHomeNews'
//import _ from 'lodash-es' //引入全部方法

const { list } = useHomeNews()
</script>