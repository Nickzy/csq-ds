<template>
  <div class="contant-form-wrap">
    <el-form
      ref="ruleFormRef"
      :model="form"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="Company" prop="company">
        <el-input v-model="form.company" placeholder="Please input your company"/>
      </el-form-item>
      <el-form-item prop="phone" label="Phone">
        <el-input v-model="form.phone" placeholder="Please input your phone" />
      </el-form-item>
      <el-form-item prop="email" label="Email">
        <el-input v-model="form.email" placeholder="Please input your email"/>
      </el-form-item>
      <el-form-item prop="subject" label="Subject">
        <el-input v-model="form.subject" placeholder="Please input your subject"/>
      </el-form-item>
      <el-form-item prop="message" label="Message">
        <el-input v-model="form.message" type="textarea" placeholder="Please input your message" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit()"
          >Send</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="js">
import { defineComponent } from 'vue'
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
// import type { FormInstance } from 'element-plus'
import './index.scss'
import axios from 'axios'
export default defineComponent({
  name: 'contact-form',
  components: {
    ElInput,
    ElButton,
    ElFormItem,
    ElForm,
  },
  data () {
    return {
      form: {
        company: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      },
      rules: {
        company: [
          { required: true, message: 'Please input your company', trigger: 'blur' }
        ],
        phone: [
          { required: false, message: 'Please input', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Please input your email', trigger: 'blur' }
        ],
        subject: [
          { required: false, message: 'Please input your subject', trigger: 'blur' }
        ],
        message: [
          { required: false, message: 'Please input your message', trigger: 'blur' }
        ],
      }
    }
  },
  // setup() {
    
  // },
  methods: {
    async submit () {
      let formEl = this.$refs.ruleFormRef
      if (!formEl) return
      await formEl.validate((valid, fields) => {
        console.log(valid)
        if (valid) {
          console.log('submit!', this.form, window.Email)
          this.sendemail()
        }
      })
    },
    sendemail () {
      // RNLGVCTORKKTADQP
      // window.Email.send({
      //     // SecureToken : "RNLGVCTORKKTADQP",
      //     Host : "smtp.163.com",
      //     Username : "m18730213206@163.com",
      //     Password : "zhou123",
      //     To : '767265762@qq.com',
      //     From : "m18730213206@163.com",
      //     Subject : "This is the subject",
      //     Body : "And this is the body"
      // }).then(
      //   message => alert(message)
      // );
      // axios({
      //   url: 'http://localhost:3000/email',
      //   method: 'get',
      //   params: {
      //       name,
      //       // owner,
      //       email: 'replyEmail',
      //       search: 'msg',
      //   },
      //   withCredentials: true,
      // })
    }
  }
})
</script>
