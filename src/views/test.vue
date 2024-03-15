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
        <Icon></Icon>
        <!-- <component :is="Icon" /> -->
        <div class="content"></div>
    </div>
</template>

<script setup>
//按需引入, 不建议全局引入
import md5 from 'js-md5'
import _ from 'lodash-es'
import * as echarts from "echarts"
import { ref, onMounted } from "vue"
//导入二维码组件
import QrcodeVue from 'qrcode.vue'
//引入svg组件
import Icon from '../components/Icon.vue'

const payUrl = ref('')
payUrl.value = 'https://www.google.com.tw/'

console.log(md5('123456'))
console.log(_.truncate('标题标题标题标题标题标题标题', {length: 10}))

onMounted(() => {
  init();
})

function init() {
  // 基于准备好的dom，初始化echarts实例
  let Chart = echarts.init(document.getElementById("echart"));
  // 绘制图表
  let options = {
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  };

  // 渲染图表
  Chart.setOption(options);
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
