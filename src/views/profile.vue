<template>
  <h1>Profile</h1>
  <div id="subMenu">
      <div id="innerSubMenu">
          <div id="pagePath"><router-link to="/">{{ $t('backHome') }}</router-link><span class="side2">&nbsp;</span>Profile</div>
      </div>
  </div>
  <div id="mainContents">
      <el-form ref="profileForm" :model="form" :rules="rules" label-width="130px">
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
          <el-form-item label="Avatar" prop="avatar">
            <el-upload
              ref="upfile"
              action="#"
              :auto-upload="false"
              :multiple="false"
              :on-change="handleChange">
              <el-button size="small" type="primary">选择文件</el-button>
              <img v-if="form.avatar" :src="form.avatar" alt="">
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" :disabled="isDisabled">Submit</el-button>
          </el-form-item>
        </el-form>
  </div>
</template>

<script setup>
import useProfile from '@/composables/useProfile'

//頁面使用組合函数
const { profileForm, form, submitForm, rules, isDisabled, handleChange } = useProfile()
</script>