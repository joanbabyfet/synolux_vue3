import { defineStore } from 'pinia'

// 创建store,命名规则： useXxxxStore
// 参数1：store的唯一表示
// 参数2：对象，可以提供state actions getters
const useCounterStore = defineStore('counter', {
    //开启数据持久化
    persist: true,
    state: () => {
        return {
            count: 0,
        }
    },
    //getters 提供计算属性
    getters: {
        double() {
                return this.count * 2
            },
        },
    //在pinia中没有mutations，只有actions，不管是同步还是异步的代码，都可以在actions中完成
    actions: {
        increment() {
            this.count++
        },
        incrementAsync() {
            setTimeout(() => {
                this.count++
            }, 1000)
        }
    },
})
export default useCounterStore
