import { onMounted, ref } from 'vue'
import { login, getCaptcha } from '../api/index'
import { ElMessage } from 'element-plus'
import useUserStore from '../store/user'
import router from '../router'
import { Base64 } from 'js-base64'

export default function() {
    //定义表单绑定的ref
    const loginForm = ref(null)
    //定义初始化数据
    const form = ref({
        username: '',
        password: '',
        code: '',
        key: '',
    })
    //定义表单验证规则, 文字框用blur(失去焦点), 需要选择的用change(数据改变)
    const rules = {
        username: [
            { required: true, message: 'Enter Username', trigger: ['blur']}
        ],
        password: [
            { required: true, message: 'Enter Password', trigger: ['blur']},
            { min: 6, max: 30, message: '长度在6-20个字符', trigger: ['blur']}
        ],
        code: [{ required: true, message: 'Enter Captcha', trigger: ['blur']}],
    }
    const isDisabled = ref(false) //禁用按钮避免重复提交
    const captchaImageUrl = ref('')
    const userStore = useUserStore()

    const submitForm = () => {
        isDisabled.value = true
        loginForm.value.validate(async (valid) => {
            if(valid) {
                //发送请求
                const headers = {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
                //用户密码加密
                let encode_pwd = Base64.encode(form.value.password)
                form.value.password = encode_pwd
                login(form.value, headers).then(res => {
                    isDisabled.value = false
                    if(res.code === 0) {
                        //保存token与用户信息
                        //localStorage.setItem('token', res.data.token)
                        userStore.setToken(res.data.token)
                        userStore.setUserInfo(res.data)
                        //提示信息
                        ElMessage.success(res.msg)
                        //重置表单
                        loginForm.value.resetFields()
                        //重刷验证码
                        onChangeCaptcha()
                        //跳转到会员中心
                        router.push('/profile') 
                    }
                    else {
                        ElMessage.error(res.msg)
                        //重刷验证码
                        onChangeCaptcha()
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
                captchaImageUrl.value = res.data.img
                form.value.key = res.data.key
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