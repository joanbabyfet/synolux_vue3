import { ref } from 'vue'
import { editPwd } from '../api/index'
import { ElMessage } from 'element-plus'
import useUserStore from '@/store/user'
import router from '../router'

export default function() {
    //定义表单绑定的ref
    const editPwdForm = ref(null)
    //定义初始化数据
    const form = ref({
        old_password: '',
        password: '',
        id: '',
    })
    const equalPassword = (rule, value, callback) => {
        if(value !== form.value.password) {
            callback(new Error('两次输入密码不一致'))
        }
        else {
            callback()
        }
    }
    //定义表单验证规则, 文字框用blur(失去焦点), 需要选择的用change(数据改变)
    const rules = {
        old_password: [
            { required: true, message: 'Enter Old Password', trigger: ['blur']}
        ],
        password: [
            { required: true, message: 'Enter New Password', trigger: ['blur']},
            { min: 6, max: 30, message: '长度在6-20个字符', trigger: ['blur']}
        ],
        confirm_password: [
            { required: true, message: 'Enter Confirm Password', trigger: ['blur']},
            { required: true, validator: equalPassword, trigger: ['blur']}
        ],
    }
    const isDisabled = ref(false) //禁用按钮避免重复提交

    const submitForm = () => {
        isDisabled.value = true
        editPwdForm.value.validate(async (valid) => {
            if(valid) {
                //获取用户id
                const userStore = useUserStore()
                form.value.id = userStore.userInfo.id
                //console.log(form.value.id)
                //发送请求
                const headers = {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
                editPwd(form.value, headers).then(res => {
                    isDisabled.value = false
                    if(res.code === 0) {
                        ElMessage.success(res.msg)
                        //重置表单
                        editPwdForm.value.resetFields()
                        //跳转到会员中心
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

    return {
        editPwdForm,
        form,
        submitForm,
        rules,
        isDisabled
    }
}