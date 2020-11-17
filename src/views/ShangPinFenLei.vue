  <template>
  <div>


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
          <span>导航栏</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">会员列表</el-menu-item>
          <el-menu-item index="1-2">充值设置</el-menu-item>
           <el-menu-item index="1-1">积分设置</el-menu-item>
          <el-menu-item index="1-2">充值记录</el-menu-item>
           <el-menu-item index="1-1">消费记录</el-menu-item>
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
    
       <div class="biaoge">
<el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="分类名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="商品数量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>
     
      
    </el-table>
  </div>
  <div class="annn">
<el-row>
  <el-button type="primary">添加分类</el-button>
</el-row>
  </div>
  <div class="fenye">
      <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
  </div>
  </div>
  </template>
<script>
    export default {
      data() {
        return {
          tableData: [{
            date: '服装',
            name: '150',
            address: '增加子分类  编辑  删除',
          }, {
            date: '毛衣',
            name: '￥50.00',
            address: '订房',
            caozuoyuan:'张三',
            caozuo:'增加子分类  编辑  删除'
          }, {
            date: 'T恤',
            name: '￥69.00',
            address: '商品购买',
            caozuoyuan:'张三',
            caozuo:'增加子分类  编辑  删除'
          }, {
            date: '西装',
            name: '￥70.00',
            address: '订房',
            caozuoyuan:'张三',
            caozuo:'增加子分类  编辑  删除'
          }, {
            date: '配饰',
            name: '￥90.00',
            address: '订房',
            caozuoyuan:'张三',
            caozuo:'增加子分类  编辑  删除'
          }]
        }
      }
    }
  </script>
  <style scoped>
 
  .daohang{
    width: 401px;
    height: 300px;
    margin: -100px 0px 0px 0px;
}
.fenye{
    margin: -550px 0px 0px 80px;
}
.biaoge{
        margin: -120px 0px 0px 215px;
    }
    .wenbenqw{
        margin: -424px 0px 0px 820px;
        width: 300px;
    }
    .wenben{
        width: 250px;
    }
    .rqia{
        margin: 0px 0px 0px -545px;
    }
    .xiala{
        margin: -55px 0px 0px 600px;
    }
    .annn{
        margin: -350px 1000px 0px 0px;
    }
  </style>