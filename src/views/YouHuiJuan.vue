  <template>
  <div>

      <div class="rqia">
    <div class="block">
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
        <div class="xiala">
      <div style="margin-top: 15px;">
    <el-select v-model="select" slot="prepend" placeholder="全部状态">
      <el-option label="全部类型" value="1"></el-option>
      <el-option label="会员充值" value="2"></el-option>
      <el-option label="商家充值" value="3"></el-option>
    </el-select>
</div>
  </div>

 

      </div>

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
        label="优惠券名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="状态"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="使用门槛">
      </el-table-column>
      <el-table-column
        prop="caozuoyuan"
        label="发放总量">
      </el-table-column>
      <el-table-column
        prop="caozuo"
        label="已发放数">
      </el-table-column>
       <el-table-column
        prop="shiyong"
        label="已发放数">
      </el-table-column>
    </el-table>
  </div>
 <div class="wenbenqw">
      <div style="margin-top: 15px;">
  <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="" value="手机号"></el-option>
      <el-option label="订单编号" value="2"></el-option>
      <el-option label="昵称" value="3"></el-option>
      <el-option label="手机号" value="3"></el-option>
      <el-option label="会员卡号" value="3"></el-option>
    </el-select>
  </el-input>
</div>
  </div>
  <div class="annn">
<el-row>
  <el-button type="primary">查询</el-button>
  <el-button>重置</el-button>
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
            date: '类型：代金券',
            name: '抵扣金额：10.00元',
            address: '● 已过期',
            caozuoyuan:'11',
            caozuo:'8'
          }, {
            date: '类型：折扣券',
            name: '10元优惠券',
            address: '● 已过期',
            caozuoyuan:'张三',
            caozuo:'操作'
          }, {
            date: '3折优惠券',
            name: '3折优惠券',
            address: '● 已过期',
            caozuoyuan:'张三',
            caozuo:'操作'
          }, {
            date: '类型：代金券',
            name: '5元优惠券',
            address: '● 已过期',
            caozuoyuan:'张三',
            caozuo:'操作'
          }, {
            date: '用户昵称-张三',
            name: '￥100.00',
            address: '● 已过期',
            caozuoyuan:'张三',
            caozuo:'操作'
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
        margin: -40px 0px 0px 1120px;
    }
  </style>