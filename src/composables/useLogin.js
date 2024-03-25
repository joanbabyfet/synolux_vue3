import { onMounted, ref } from 'vue'
import { login, getCaptcha } from '../api/index'
import { ElMessage } from 'element-plus'

export default function() {
    //定义表单绑定的ref
    const loginForm = ref(null)
    //定义初始化数据
    const form = ref({
        username: '',
        password: '',
        captcha: '',
        key: '',
    })
    //定义表单验证规则, 文字框用blur(失去焦点), 需要选择的用change(数据改变)
    const rules = {
        username: [{ required: true, message: 'Enter Username', trigger: ['blur']}],
        password: [{ required: true, message: 'Enter Password', trigger: ['blur']}],
        captcha: [{ required: true, message: 'Enter Captcha', trigger: ['blur']}],
    }
    const isDisabled = ref(false) //禁用按钮避免重复提交
    const captchaImageUrl = ref('')

    const submitForm = () => {
        isDisabled.value = true
        loginForm.value.validate(async (valid) => {
            if(valid) {
                //发送请求
                login(form.value).then(res => {
                    isDisabled.value = false
                    if(res.code === 0) {
                        ElMessage.success(res.msg)
                        //保存token
                        localStorage.setItem('access_token', res.data.access_token)
                        //重置表单
                        loginForm.value.resetFields()
                        //重刷验证码
                        onChangeCaptcha()
                    }
                    else {
                        ElMessage.error(res.msg)
                    }
                }).catch((error)=>{
                    ElMessage.error(error)
                    isDisabled.value = false
                })
            }
            else {
                isDisabled.value = false
                return false
            }
        })
    }

    onMounted(() => {
        onChangeCaptcha()
    })

    const onChangeCaptcha = () => {
        getCaptcha().then(res => {
            if(res.code === 0) {
                captchaImageUrl.value = res.data.captcha.img
                form.value.key = res.data.captcha.key
            }
        }).catch((error)=>{
            ElMessage.error(error)
        })
    }

    return {
        loginForm,
        form,
        submitForm,
        rules,
        isDisabled,
        captchaImageUrl,
        onChangeCaptcha
    }
}