import { ref, onMounted } from 'vue'
import { getNewsInfo } from '../api/index'
import { useRoute } from 'vue-router'

//获取新闻详情
export default function useNewsInfo() {
    const info = ref({})
    const route = useRoute()

    async function getInfo(id) {
        let data = {
            'id': id,
        }
        await getNewsInfo({ params: JSON.stringify(data) }).then((res) => {
            //console.log(res)
            if(res.code === 0) {
                info.value = res.data
            }
        }).catch(error => {
            console.log(error)
        })
    }

    onMounted(() => {
        getInfo(route.params.id)
    })
    
    return {
        info
    }
}