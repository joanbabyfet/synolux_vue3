import { ref, onMounted } from 'vue'
import { getNews } from '../api/index'

//获取首页新闻列表
export default function useHomeNews() {
    const list = ref([])

    async function getList() {
        let data = {
            'page': 1,
            'page_size': 3,
        }
        await getNews({ params: JSON.stringify(data) }).then((res) => {
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