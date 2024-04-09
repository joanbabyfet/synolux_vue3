import { ref, onMounted } from 'vue'
import { getNews } from '../api/index'

//获取首页新闻列表
export default function useHomeNews() {
    const list = ref([])

    async function getList() {
        let data = {
            'is_hot': 1,
            'limit': 3,
        }
        await getNews(data).then((res) => {
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