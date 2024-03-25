<template>
    <h1>Login</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><router-link to="/">{{ $t('backHome') }}</router-link><span class="side2">&nbsp;</span>Login</div>
        </div>
    </div>
    <div id="mainContents">
        <el-form ref="loginForm" :model="form" :rules="rules" label-width="130px">
            <el-form-item label="Username" prop="username">
              <el-input v-model="form.username" placeholder="Enter Username"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input v-model="form.password" placeholder="Enter Password"></el-input>
            </el-form-item>
            <el-form-item label="Captcha" prop="captcha">
              <el-input v-model="form.captcha" placeholder="Enter Captcha"></el-input>
              <el-image :src="captchaImageUrl" @click="onChangeCaptcha"></el-image>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm" :disabled="isDisabled">Submit</el-button>
            </el-form-item>
          </el-form>
    </div>
</template>

<script setup>
import useLogin from '@/composables/useLogin'

//頁面使用組合函数
const { loginForm, form, submitForm, rules, isDisabled, captchaImageUrl, onChangeCaptcha } = useLogin()
</script>