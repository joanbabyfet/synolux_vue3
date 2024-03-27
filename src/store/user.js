import { defineStore } from 'pinia'

// 创建store,命名规则： useXxxxStore
// 参数1：store的唯一标识
// 参数2：对象，可以提供state actions getters
const useUserStore = defineStore('user', {
    //开启数据持久化
    persist: true,
    state: () => {
        return {
            token: '', //存取令牌
            userInfo: {},   //用户信息
        }
    },
    actions: {
        setUserInfo(data) {
            this.userInfo = data
        },
        setToken(token) {
            this.token = token
        },
        logout() { //登出
            this.userInfo = {}
            this.token = null
        }
    }
})
export default useUserStore