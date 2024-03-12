import { ref, onMounted } from 'vue'
import { getNewsDetail } from '../api/news'

//获取新闻详情
export default function useNewsDetail(params) {
    const info = ref({})

    onMounted(async () => {
        const res = await getNewsDetail(params)
        info.value = res.data.data
    })
    
    return {
        info
    }
}