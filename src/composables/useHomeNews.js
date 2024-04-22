import { ref, onMounted } from 'vue'
import { getHomeNews } from '../api/index'

//获取首页新闻列表
export default function useHomeNews() {
    const list = ref([])

    async function getList() {
        let data = {
            'limit': 3,
        }
        await getHomeNews(data).then((res) => {
            //console.log(res)
            if(res.code === 0) {
                list.value = res.data.list
            }
        }).catch(error => {
            console.log(error)
        })
    }

    onMounted(() => {
        getList()
    })

    return {
        list
    }
}