import { ref, onMounted } from 'vue'
import { getNewsDetail } from '../api/news'

//获取新闻详情
export default function useNewsDetail(data) {
    const info = ref({})
    let params = data

    async function getData() {
        await getNewsDetail({ params: JSON.stringify(params) }).then((res) => {
            console.log(res.data)
            if(res.data.code == 0) {
                info.value = res.data.data
            }
        }).catch(error => {
            console.log(error)
        })
    }

    onMounted(() => {
        getData()
    })
    
    return {
        info
    }
}