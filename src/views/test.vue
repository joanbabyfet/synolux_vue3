<template>
    <h1>测试</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><router-link to="/">{{ $t('backHome') }}</router-link><span class="side2">&nbsp;</span>测试</div>
        </div>
    </div>
    <div id="mainContents">
        <!-- <div id="echart">
        </div> -->
        <qrcode-vue :value="payUrl" :size="200" level="H" />
        <!-- <Icon></Icon> -->
        <!-- <component :is="Icon" /> -->
        <!-- <div class="content"></div> -->
        <el-button type="primary" @click="copy('https://www.google.com.tw')">复制</el-button>
        <el-button type="primary" @click="copy2('https://tw.yahoo.com')">复制2</el-button>
        <p ref="msg"></p>
        <button type="button" @click="changeMsg">click me</button>
        <HelloWorld name="kosplay" :age="age"></HelloWorld>
        <input type="text" v-model="search">
        <input type="text" v-model="search2">
        <el-upload
          ref="upfile"
          action="#"
          :auto-upload="false"
          :multiple="false"
          :on-change="handleChange"
        >
          <el-button size="small" type="primary">选择文件</el-button>
        </el-upload>
    </div>
</template>

<script setup>
//按需引入, 不建议全局引入
//import md5 from 'js-md5'
//import _ from 'lodash-es'
//import * as echarts from "echarts"
import { ref, onMounted, watch, watchEffect } from "vue"
//导入二维码组件
import QrcodeVue from 'qrcode.vue'
//引入svg组件
//import Icon from '../components/Icon.vue'
//引入vue-clipboard3组件
import useClipboard from 'vue-clipboard3'
const { toClipboard } = useClipboard()
import { ElMessage } from 'element-plus'
//引入子组件
import HelloWorld from "@/components/HelloWorld.vue"
//上传文件api
import { uploadFile } from '../api/index'

const payUrl = ref('')
payUrl.value = 'https://www.google.com.tw/'

const msg = ref(null)
const changeMsg = () => {
  msg.value.classList.add('lalala')
  msg.value.textContent = 'hello world'
}

const age = ref(39)

const search = ref('')
// watch(search, (newValue, oldValue) => {
//   console.log('watch search', newValue, oldValue)
// })
const search2 = ref('')
// watch(search2, () => {
//   console.log('watch search2', search2.value)
// })
// watchEffect(() => {
//   console.log('watchEffect', search.value, search2.value)
// })
const stopWatch = watch(search, (newValue, oldValue) => {
  console.log('watch search', newValue, oldValue)
})
const stopWatchEffect = watchEffect(() => {
  console.log('watchEffect', search.value)
})
//5秒后执行1次就结束
setTimeout(() => {
  stopWatch()
  stopWatchEffect()
}, 5000)

//console.log(md5('123456'))
//console.log(_.truncate('标题标题标题标题标题标题标题', {length: 10}))

const copy = (content) => {
  toClipboard(content)
  ElMessage.success('复制成功')
  window.location.href=content
}

const copy2 = async (content) => {
  try {
    await toClipboard(content)
    ElMessage.success('复制成功')
    window.location.href=content
  }
  catch(e) {
    ElMessage.error(e)
  }
}

onMounted(() => {
  //init();
})

// function init() {
//   // 基于准备好的dom，初始化echarts实例
//   let Chart = echarts.init(document.getElementById("echart"));
//   // 绘制图表
//   let options = {
//     title: {
//       text: "ECharts 入门示例",
//     },
//     tooltip: {},
//     xAxis: {
//       data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
//     },
//     yAxis: {},
//     series: [
//       {
//         name: "销量",
//         type: "bar",
//         data: [5, 20, 36, 10, 10, 20],
//       },
//     ],
//   };

//   // 渲染图表
//   Chart.setOption(options);
// }

const handleChange = (file) => {
  let formData = new FormData()
  formData.append('filename', file.raw)
  formData.append('thumb_w', 200)
  //上传文件
  uploadFile(formData).then((res) => {
    if(res.code === 0) {
      console.log(res.data)
      ElMessage.success('上传成功')
    } else {
      ElMessage.error('上传失败')
    }
  }).catch(error => {
      console.log(error)
  })
}
</script>

<style scoped lang="less">
@import '../assets/css/test.less';
/* 这里要设置长宽, 否则显示不出来 */
#echart {
  width: 50vw;
  height: 80vh;
}
</style>
