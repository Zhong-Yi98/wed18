<template>
    <div>
        <div>
            角色名称: <input type="text" class="login_text" placeholder="请输入角色名称">
        </div>
        <div>
             <p class="jc">添加权限:<el-checkbox v-model="checked">全选</el-checkbox></p>
             <p class="jc"><el-checkbox v-model="checked">会员管理</el-checkbox></p>
        </div>
        
        <div class="sx">
            <p><el-checkbox v-model="checked">会员信息查看</el-checkbox><el-checkbox v-model="checked">会员管理</el-checkbox><el-checkbox v-model="checked">会员管理</el-checkbox>
            <el-checkbox v-model="checked">会员管理</el-checkbox><el-checkbox v-model="checked">会员管理</el-checkbox><el-checkbox v-model="checked">会员管理</el-checkbox></p>
            <p><el-checkbox v-model="checked">会员信息查看</el-checkbox><el-checkbox v-model="checked">会员信息查看</el-checkbox></p>
        </div>
    </div>
</template>
<style scoped>
.login_text{
    width: 20%;
    height: 30px;
}
.sx{
    border-top: 1px solid rgb(194, 194, 193);    
}
.el-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 20px;
}
</style>
// <script>
//   export default {
//     data() {
//       return {
//         checked: true
//       };
//     }
//   };
// </script>