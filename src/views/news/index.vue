<template>
    <h1>{{ $t('news.title') }}</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><router-link to="/">{{ $t('backHome') }}</router-link><span class="side2">&nbsp;</span>{{ $t('news.title') }}</div>
        </div>
    </div>
    <div class="newsList">
        <ul>
            <li v-for="item in list" :key="item.id">
                <router-link :to="`/news/${item.id}`">{{ item.title }}</router-link>
            </li>
        </ul>
        <!-- <p>目前無最新訊息...</p> -->
        <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :total="total"
            :page-sizes="[10, 20, 30, 40]"
            layout="total, sizes, prev, pager, next, jumper"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            >
        </el-pagination>
    </div>
    
</template>

<script setup>
import useNews from '@/composables/useNews'

const { list, total, currentPage, pageSize, handleCurrentChange, handleSizeChange } = useNews()
</script>
