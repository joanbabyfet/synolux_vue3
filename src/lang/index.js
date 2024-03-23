import { createI18n } from 'vue-i18n'   //引入vue-i18n组件
import zh from './locales/zh'
import en from './locales/en'

//i18n配置文件
const i18n = createI18n({
  legacy: false, // vue3 组合式API
  locale: localStorage.getItem('language') || 'zh', // 默认语言
  fallbackLocale: 'en',  //备用语言
  messages: {
    'zh': zh,
    'en': en
  },
  warnHtmlMessage: false //关闭 Detected HTML 警告
})

export default i18n