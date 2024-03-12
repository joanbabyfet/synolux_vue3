import { ref, onMounted } from 'vue'
import { getNews } from '../api/news'

//获取新闻列表
export default function useNews(params) {
    const news = ref([])
    const count = ref(0)

    onMounted(async () => {
        const res = await getNews(params)
        news.value = res.data.data.list
        count.value = res.data.data.count
    })

    return {
        news,
        count
    }
}