import { ref, onMounted } from 'vue'
import { getNewsDetail } from '../api/news'
import { useRoute } from 'vue-router'

//获取新闻详情
export default function useNewsDetail() {
    const info = ref({})
    const route = useRoute()

    async function getDetail(id) {
        let data = {
            'id': id,
        }
        await getNewsDetail({ params: JSON.stringify(data) }).then((res) => {
            console.log(res.data)
            if(res.data.code == 0) {
                info.value = res.data.data
            }
        }).catch(error => {
            console.log(error)
        })
    }

    onMounted(() => {
        getDetail(route.params.id)
    })
    
    return {
        info
    }
}