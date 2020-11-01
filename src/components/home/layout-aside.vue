<template>
  <div class="layout-out">
    <div class="title">
      <img src="../../assets/imges/151600668521_.pic_hd.jpg"
           alt="">
    </div>
    <el-menu default-active="2"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b">
      <el-menu-item index="2">
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu>
        <template slot="title">
          <!-- <i class="el-icon-s-order"></i> -->
          <span>内容管理</span>
        </template>
        <el-menu-item>发布文章</el-menu-item>
        <el-menu-item>内容列表</el-menu-item>
        <el-menu-item>评论列表</el-menu-item>
        <el-menu-item>素材管理</el-menu-item>
      </el-submenu>
      <el-submenu>
        <template slot="title">
          <span>粉丝管理</span>
        </template>
        <el-menu-item>图文数据</el-menu-item>
        <el-menu-item>文字概况</el-menu-item>
        <el-menu-item>粉丝列表</el-menu-item>
        <el-menu-item>粉丝画像</el-menu-item>
      </el-submenu>

      <el-menu-item index="5">
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
// <!-- // 图片背景颜色#2e2f32  导航背景色#353b4e 导航字体颜色#adafb5 导航字体激活颜色#ffd04b -->

.layout-out {
  background-color: #545c64;
  //nnnn
  width: 250px;
  height: 100vh;
  color: #adafb5;
  .title {
    text-align: center;
    background-color: #2e2f32;
    padding: 11px 0;
  }
}
</style>
