<template>
    <h1>Register</h1>
    <div id="subMenu">
        <div id="innerSubMenu">
            <div id="pagePath"><router-link to="/">{{ $t('backHome') }}</router-link><span class="side2">&nbsp;</span>Register</div>
        </div>
    </div>
    <div id="mainContents">
        <el-form ref="registerForm" :model="form" :rules="rules" label-width="130px">
            <el-form-item label="Username" prop="username">
              <el-input v-model="form.username" placeholder="Enter Username"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input type="password" v-model="form.password" placeholder="Enter Password"></el-input>
            </el-form-item>
            <el-form-item label="Real Name" prop="realname">
              <el-input v-model="form.realname" placeholder="Enter Real Name"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <el-input v-model="form.email" placeholder="Enter Email"></el-input>
            </el-form-item>
            <el-form-item label="Phone Code" prop="phone_code">
              <el-input v-model="form.phone_code" placeholder="Enter Phone Code"></el-input>
            </el-form-item>
            <el-form-item label="Phone" prop="phone">
              <el-input v-model="form.phone" placeholder="Enter Phone"></el-input>
            </el-form-item>
            <el-form-item label="Captcha" prop="captcha">
              <el-input v-model="form.captcha" placeholder="Enter Captcha" maxlength="4"></el-input>
              <el-image :src="captchaImageUrl" @click="onChangeCaptcha"></el-image>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm" :disabled="isDisabled">Submit</el-button>
            </el-form-item>
          </el-form>
    </div>
</template>

<script setup>
import useRegister from '@/composables/useRegister'

//頁面使用組合函数
const { registerForm, form, submitForm, rules, isDisabled, captchaImageUrl, onChangeCaptcha } = useRegister()
</script>