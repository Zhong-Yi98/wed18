<template>      
  <div class="sy_bady">
         <div class="wz">
             <img src="../assets/u46.png">首页
             <div class="nc">
                 <img src="../assets/u49.png">
                 <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    用户昵称<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item disabled>修改密码</el-dropdown-item>
    <el-dropdown-item divided>退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
             </div>       
         </div>
         <el-row class="tac">
  
  <el-col :span="5">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>会员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><router-link to="/hylb">会员列表</router-link></el-menu-item>
          <el-menu-item index="1-2">充值设置</el-menu-item>
          <el-menu-item index="1-3">积分设置</el-menu-item>
          <el-menu-item index="1-3">充值记录</el-menu-item>
          <el-menu-item index="1-3">消费记录</el-menu-item>
        </el-menu-item-group>
        
      </el-submenu>
      <el-submenu index="1-4">
          <template slot="title">优惠价</template>
          <el-menu-item index="1-4-1">优惠价管理</el-menu-item>
        </el-submenu>
         <el-submenu index="1-4">
          <template slot="title">商品管理</template>
          <el-menu-item index="1-4-1">商品列表</el-menu-item>
          <el-menu-item index="1-4-1"><router-link to="/spfl">商品分类</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="1-4">
          <template slot="title">订单管理</template>
          <el-menu-item index="1-4-1">商品订单</el-menu-item>
          <el-menu-item index="1-4-1">客服订单</el-menu-item>
          <el-menu-item index="1-4-1">房号管理</el-menu-item>
        </el-submenu>
        <el-submenu index="1-4">
          <template slot="title">投诉建议管理</template>
          <el-menu-item index="1-4-1">投诉建议</el-menu-item>
        </el-submenu>
        <el-submenu index="1-4">
          <template slot="title">用户管理</template>
          <el-menu-item index="1-4-1">管理员列表</el-menu-item>
          <el-menu-item index="1-4-1">角色管理</el-menu-item>
        </el-submenu>
        <el-submenu index="1-4">
          <template slot="title">设置</template>
          <el-menu-item index="1-4-1">微信设置</el-menu-item>
          <el-menu-item index="1-4-1">酒店设置</el-menu-item>
          <el-menu-item index="1-4-1">其它设置</el-menu-item>
        </el-submenu>
    </el-menu>
  </el-col>
</el-row>

          </div>
</template>


<style scoped>
.sy_bady {
background-color:#b1b1b1 ;
width: 100%;
height: 50px;
}
.wz{
    margin-left: -1500px;
    
}
.nc{
    margin-left: 2700px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

</style>
  <script>
   export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
  </script>