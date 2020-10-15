<template>
  <div class="login">
    <el-card class="login-card">
      <div class="logo">
        <img src="../assets/imges/161600668522_.pic_hd.jpg" alt="">
      </div>
      <el-form style="margin-top:20px">
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
         <el-form-item >
          <el-input style="width:280px"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src
export default {}
</script>
<style lang='less' scoped>
.login{
  background:url('../assets/imges/141600668520_.pic_hd.jpg');
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 440px;
    height: 350px;
    .logo {
      text-align: center;
      img {
        height: 45px;
      }
    }
  }
}
</style>
