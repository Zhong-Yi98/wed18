<template>
    <div class="daohang">
<el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航栏</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">会员列表</el-menu-item>
          <el-menu-item index="1-2">充值设置</el-menu-item>
           <router-link to="/jifen" tag="el-menu-item" index="1-1">积分设置</router-link>
          <el-menu-item index="1-2">充值设置</el-menu-item>
          <router-link to="/chongzhi" tag="el-menu-item" index="1-2">充值记录</router-link>
           <router-link to="/xiaofei" tag="el-menu-item" index="1-1">消费记录</router-link>
          <el-menu-item index="1-2">优惠券管理</el-menu-item>
           <el-menu-item index="1-1">商品列表</el-menu-item>
          <el-menu-item index="1-2">商品分类</el-menu-item>
           <el-menu-item index="1-1">商品订单</el-menu-item>
          <el-menu-item index="1-2">客房订单</el-menu-item>
           <el-menu-item index="1-1">住宿记录</el-menu-item>
          <el-menu-item index="1-2">房态管理</el-menu-item>
           <el-menu-item index="1-1">房型管理</el-menu-item>
          <el-menu-item index="1-2">房号管理</el-menu-item>
           <el-menu-item index="1-1">投诉建议</el-menu-item>
          <el-menu-item index="1-2">管理员列表</el-menu-item>
           <el-menu-item index="1-1">角色管理</el-menu-item>
          <el-menu-item index="1-2">微信设置</el-menu-item>
           <el-menu-item index="1-1">酒店设置</el-menu-item>
          <el-menu-item index="1-2">其它设置</el-menu-item>
        </el-menu-item-group>
    </el-menu>
  </el-col>
    </div>
</template>
<style scoped>
.daohang{
    width: 401px;
    height: 300px;
    margin-top: -98px;
}
</style>