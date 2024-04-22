import { ref, onMounted } from 'vue'
import { profile } from '../api/index'
import { ElMessage } from 'element-plus'
import router from '../router'
import useUserStore from '../store/user'

export default function() {
    //定义表单绑定的ref
    const profileForm = ref(null)
    //定义初始化数据
    const form = ref({
        realname: '',
        email: '',
        phone_code: '',
        phone: '',
    })
    //定义表单验证规则, 文字框用blur(失去焦点), 需要选择的用change(数据改变)
    const rules = {
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
    }
    const isDisabled = ref(false) //禁用按钮避免重复提交
    const userStore = useUserStore()

    const submitForm = () => {
        isDisabled.value = true
        profileForm.value.validate(async (valid) => {
            if(valid) {
                //发送请求
                const headers = {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
                profile(form.value, headers).then(res => {
                    isDisabled.value = false
                    if(res.code === 0) {
                        //提示信息
                        ElMessage.success(res.msg)
                        //重置表单
                        //profileForm.value.resetFields()
                        //跳转到会员中心页
                        router.push('/profile') 
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
        form.value = ref(userStore.userInfo).value
    })

    return {
        profileForm,
        form,
        submitForm,
        rules,
        isDisabled,
    }
}