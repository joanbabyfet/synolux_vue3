import { ref, onMounted } from 'vue'
import { getNews } from '../api/index'
import { ElMessage } from 'element-plus'

//获取新闻列表
export default function useNews() {
    const list = ref([]) 
    const total = ref(0) //总条数
    const currentPage = ref(1) //第几页
    const pageSize = ref(10) //每页显示几条

    async function getList() {
        let data = {
            'page': currentPage.value,
            'page_size': pageSize.value,
        }
        await getNews(data).then((res) => {
            //console.log(res)
            if(res.code === 0) {
                list.value = res.data.lists
                total.value = res.data.total
            }
        }).catch(error => {
            //console.log(error)
            ElMessage.error(error)
        })
    }

    onMounted(() => {
        getList()
    })

    const handleCurrentChange = (val) => {
        console.log(`current page: ${val}`)
        currentPage.value = val
        getList()
    }

    const handleSizeChange = (val) => {
        console.log(`${val} items per page`)
        pageSize.value = val
        getList()
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