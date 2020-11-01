<template>
  <div>
    <!-- 最外层容器  四个组件只能放在container中 -->
    <el-container>
      <el-aside>
        <layout-aside></layout-aside>
      </el-aside>
      <el-container>
        <el-header>头部</el-header>
        <el-main>主要显示区域</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import layoutAside from '../components/home/layout-aside.vue'
export default {
  components: {
    'layout-aside': layoutAside
  }
}
</script>
<style lang="less" scoped>
// .el-header {
//   background-color: #b3c0d1;
//   color: #333;
//   text-align: center;
//   line-height: 60px;
// }

// 图片背景颜色#2e2f32  导航背景色#353b4e 导航字体颜色#adafb5 导航字体激活颜色#ffd04b
// .el-aside {
//   background-color: #323745;
//   color: #333;
//   text-align: center;
//   line-height: 200px;
//   height: 100vh;
// }

// .el-main {
//   background-color: #e9eef3;
//   color: #333;
//   text-align: center;
//   line-height: 160px;
// }

// body > .el-container {
//   margin-bottom: 40px;
// }

// .el-container:nth-child(5) .el-aside,
// .el-container:nth-child(6) .el-aside {
//   line-height: 260px;
// }

// .el-container:nth-child(7) .el-aside {
//   line-height: 320px;
// }
</style>
