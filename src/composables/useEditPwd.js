import { ref } from 'vue'
import { editPwd } from '../api/index'
import { ElMessage } from 'element-plus'
import useUserStore from '@/store/user'
import router from '../router'
import { Base64 } from 'js-base64'

export default function() {
    //定义表单绑定的ref
    const editPwdForm = ref(null)
    //定义初始化数据
    const form = ref({
        password: '', //原始密码
        new_password: '', //新密码
        re_password: '', //确认密码
        id: '',
    })
    const equalPassword = (rule, value, callback) => {
        if(value !== form.value.new_password) {
            callback(new Error('两次输入密码不一致'))
        }
        else {
            callback()
        }
    }
    //定义表单验证规则, 文字框用blur(失去焦点), 需要选择的用change(数据改变)
    const rules = {
        password: [
            { required: true, message: 'Enter Old Password', trigger: ['blur']}
        ],
        new_password: [
            { required: true, message: 'Enter New Password', trigger: ['blur']},
            { min: 6, max: 30, message: '长度在6-20个字符', trigger: ['blur']}
        ],
        re_password: [
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
                //用户密码加密
                let encode_pwd = Base64.encode(form.value.password)
                let encode_new_pwd = Base64.encode(form.value.new_password)
                let encode_re_pwd = Base64.encode(form.value.re_password)
                form.value.password = encode_pwd
                form.value.new_password = encode_new_pwd
                form.value.re_password = encode_re_pwd
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