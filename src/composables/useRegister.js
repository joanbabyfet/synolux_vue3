import { onMounted, ref } from 'vue'
import { register, getCaptcha } from '../api/index'
import { ElMessage } from 'element-plus'
import router from '../router'

export default function() {
    //定义表单绑定的ref
    const registerForm = ref(null)
    //定义初始化数据
    const form = ref({
        username: '',
        password: '',
        realname: '',
        email: '',
        phone_code: '',
        phone: '',
        captcha: '',
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
        realname: [
            { required: true, message: 'Enter Real Name', trigger: ['blur']}
        ],
        email: [
            { required: true, message: 'Enter Email', trigger: ['blur']}
        ],
        phone_code: [
            { required: true, message: 'Enter Phone Code', trigger: ['blur']}
        ],
        phone: [
            { required: true, message: 'Enter Phone', trigger: ['blur']}
        ],
        captcha: [{ required: true, message: 'Enter Captcha', trigger: ['blur']}],
    }
    const isDisabled = ref(false) //禁用按钮避免重复提交
    const captchaImageUrl = ref('')

    const submitForm = () => {
        isDisabled.value = true
        registerForm.value.validate(async (valid) => {
            if(valid) {
                //发送请求
                const headers = {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
                register(form.value, headers).then(res => {
                    isDisabled.value = false
                    if(res.code === 0) {
                        //提示信息
                        ElMessage.success(res.msg)
                        //重置表单
                        registerForm.value.resetFields()
                        //重刷验证码
                        onChangeCaptcha()
                        //跳转到登录页
                        router.push('/login') 
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
                captchaImageUrl.value = res.data.captcha.img
                form.value.key = res.data.captcha.key
            }
        }).catch((error)=>{
            ElMessage.error(error)
        })
    }

    return {
        registerForm,
        form,
        submitForm,
        rules,
        isDisabled,
        captchaImageUrl,
        onChangeCaptcha
    }
}