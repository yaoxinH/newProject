<template>
  <div class="login">
    <el-card class="login-card">
      <div class="logo">
        <img src="../assets/imges/161600668522_.pic_hd.jpg"
             alt="">
      </div>
      <!-- 验证规则需要给表单 el-form 加一个属性  不加冒号就成字符串了  这是规定 -->
      <el-form ref="loginForm"
               style="margin-top:20px"
               :model="loginForm"
               :rules="loginRules">
        <el-form-item prop="mobile">
          <el-input placeholder="请您输入手机号"
                    v-model="loginForm.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input style="width:280px"
                    placeholder="请输入验证码"
                    v-model="loginForm.code"></el-input>
          <el-button style="float:right"
                     v-model="loginForm.check">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="login"
                     type="primary"
                     style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    const validator = function (rule, value, callback) {
      if (value) {
        callback()
      } else {
        callback(new Error('您必须同意该条款'))
      }
    }
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: false
      },
      // 定义rules校验规则
      loginRules: {
        mobile: [
          { required: true, message: '请正确填写手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' } //
        ],
        code: [
          { required: true, message: '请正确填写验证码', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '验证码不正确' } //
        ],
        check: [
          { validator }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(isOK => {
        if (isOK) {
          this.$axios({
            url: '/authorizations',
            method: 'post',
            // data是放置body参数params是放置地址参数的
            data: this.loginForm
          }).then(result => {
            console.log(result)
            localStorage.setItem('user-token', JSON.stringify(result.data.data.token))
            this.$router.push('/home')
          }).catch(() => {
            this.$message({
              message: '错误',
              type: 'warning'
            })
          })
        }
      })
    }
  }
}

</script>
<style lang='less' scoped>
.login {
  background: url("../assets/imges/141600668520_.pic_hd.jpg");
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-card {
    width: 450px;
    height: 380px;
  }
}
</style>
