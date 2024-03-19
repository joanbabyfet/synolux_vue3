import { ref, onMounted } from 'vue'
import { getNews } from '../api/news'

//获取新闻列表
export default function useNews() {
    const list = ref([]) 
    const total = ref(0) //总条数
    const currentPage = ref(1) //第几页
    const pageSize = ref(10) //每页显示几条

    async function getData() {
        let data = {
            'page': currentPage.value,
            'page_size': pageSize.value,
        }
        await getNews({ params: JSON.stringify(data) }).then((res) => {
            console.log(res.data)
            if(res.data.code == 0) {
                list.value = res.data.data.list
                total.value = res.data.data.count
            }
        }).catch(error => {
            console.log(error)
        })
    }

    onMounted(() => {
        getData()
    })

    const handleCurrentChange = (val) => {
        console.log(`current page: ${val}`)
        currentPage.value = val
        getData()
    }

    const handleSizeChange = (val) => {
        console.log(`${val} items per page`)
        pageSize.value = val
        getData()
    }

    return {
        list,
        total,
        currentPage,
        pageSize,
        handleCurrentChange,
        handleSizeChange
    }
}