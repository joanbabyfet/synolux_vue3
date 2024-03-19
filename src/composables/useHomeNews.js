import { ref, onMounted } from 'vue'
import { getNews } from '../api/news'

//获取首页新闻列表
export default function useHomeNews() {
    const list = ref([])

    async function getData() {
        let data = {
            'page': 1,
            'page_size': 3,
        }
        await getNews({ params: JSON.stringify(data) }).then((res) => {
            console.log(res.data)
            if(res.data.code == 0) {
                list.value = res.data.data.list
            }
        }).catch(error => {
            console.log(error)
        })
    }

    onMounted(() => {
        getData()
    })

    return {
        list
    }
}