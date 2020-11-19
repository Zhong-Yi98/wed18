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
            <p><el-checkbox v-model="checked">会员信息查看</el-checkbox><el-checkbox v-model="checked">会员信息修改</el-checkbox><el-checkbox v-model="checked">会员积分修改</el-checkbox>
            <el-checkbox v-model="checked">会员充值</el-checkbox><el-checkbox v-model="checked">充值设置</el-checkbox><el-checkbox v-model="checked">积分设置</el-checkbox></p>
            <p><el-checkbox v-model="checked">充值记录</el-checkbox><el-checkbox v-model="checked">消费记录</el-checkbox></p>
        </div>
        <div>
            <div>
                <p><el-checkbox v-model="checked">优惠卷</el-checkbox></p>
            </div>
            <div class="sx">
                <p><el-checkbox v-model="checked">优惠券信息查看</el-checkbox><el-checkbox v-model="checked">优惠券信息修改</el-checkbox><el-checkbox v-model="checked">优惠券发放</el-checkbox></p>
                <p><el-checkbox v-model="checked">商品</el-checkbox></p>
            </div>
            <div class="sx">
                <p><el-checkbox v-model="checked">商品信息查看</el-checkbox><el-checkbox v-model="checked">商品信息修改</el-checkbox><el-checkbox v-model="checked">商品分类信息修改</el-checkbox></p>
                <p><el-checkbox v-model="checked">订单管理</el-checkbox></p>
            </div>
            <div class="sx">
                <div>
                    <p><el-checkbox v-model="checked">商品订单查看</el-checkbox><el-checkbox v-model="checked">商品订单处理</el-checkbox><el-checkbox v-model="checked">客房订单查看</el-checkbox>
                    <el-checkbox v-model="checked">客房订单处理</el-checkbox><el-checkbox v-model="checked">住宿记录查看</el-checkbox></p>
                    <p><el-checkbox v-model="checked">客房管理</el-checkbox></p>
                </div>
                <div class="sx">
                    <div>
                            <p><el-checkbox v-model="checked">房态查看</el-checkbox><el-checkbox v-model="checked">房态修改</el-checkbox><el-checkbox v-model="checked">房型查看</el-checkbox>
                            <el-checkbox v-model="checked">房型修改</el-checkbox><el-checkbox v-model="checked">房号查看</el-checkbox></p>
                        <p><el-checkbox v-model="checked">投诉建议</el-checkbox></p>
                    </div>
                    <div class="sx">
                        <div>
                            <p><el-checkbox v-model="checked">投诉建议查看</el-checkbox><el-checkbox v-model="checked">投诉建议处理</el-checkbox></p>
                            <p><el-checkbox v-model="checked">设置</el-checkbox></p>
                        </div>
                    </div>
                    <div class="sx">
                        <div>
                            <p><el-checkbox v-model="checked">微信设置</el-checkbox><el-checkbox v-model="checked">酒店设置</el-checkbox><el-checkbox v-model="checked">其它设置</el-checkbox></p>
                            <p><el-checkbox v-model="checked">用户管理</el-checkbox></p>
                        </div>
                    </div>
                    <div class="sx">
                        <div>
                            <p><el-checkbox v-model="checked">用户查看</el-checkbox><el-checkbox v-model="checked">用户修改</el-checkbox>
                            <el-checkbox v-model="checked">角色查看</el-checkbox><el-checkbox v-model="checked">角色修改</el-checkbox></p>
                        </div>
                    </div>
                </div>
                <div class="bc">
                    <button>保存</button>
                </div>
            </div>
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
    font-size: 19px;
}
.bc{
    margin-left: 1400px;
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