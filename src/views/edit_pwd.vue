<template>
    <h1>Edit Password</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><router-link to="/">{{ $t('backHome') }}</router-link><span class="side2">&nbsp;</span>Edit Password</div>
        </div>
    </div>
    <div id="mainContents">
        <el-form ref="editPwdForm" :model="form" :rules="rules" label-width="150px">
            <el-form-item label="Old Password" prop="password">
              <el-input type="password" v-model="form.password" placeholder="Enter Old Password"></el-input>
            </el-form-item>
            <el-form-item label="New Password" prop="new_password">
              <el-input type="password" v-model="form.new_password" placeholder="Enter New Password"></el-input>
            </el-form-item>
            <el-form-item label="Confirm Password" prop="re_password">
              <el-input type="password" v-model="form.re_password" placeholder="Enter Confirm Password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm" :disabled="isDisabled">Submit</el-button>
            </el-form-item>
          </el-form>
    </div>
</template>

<script setup>
import useLogin from '@/composables/useEditPwd'

//頁面使用組合函数
const { editPwdForm, form, submitForm, rules, isDisabled } = useLogin()
</script>