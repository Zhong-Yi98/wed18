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
    <el-select v-model="select" slot="prepend" placeholder="全部类型">
      <el-option label="全部类型" value="1"></el-option>
      <el-option label="会员充值" value="2"></el-option>
      <el-option label="商家充值" value="3"></el-option>
    </el-select>
</div>
  </div>

 

      </div>

   <Daohang></Daohang>
    
       <div class="biaoge">
<el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="用户信息"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="消费金额"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="消费类型">
      </el-table-column>
      <el-table-column
        prop="caozuoyuan"
        label="操作员">
      </el-table-column>
      <el-table-column
        prop="caozuo"
        label="操作">
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
import Daohang from './Daohang'
    export default {
       components:{
 Daohang,
  },
      data() {
        return {
          tableData: [{
            date: '用户昵称-张三',
            name: '￥100.00',
            address: '订房',
            caozuoyuan:'张三',
            caozuo:'操作'
          }, {
            date: '用户昵称-张三',
            name: '￥100.00',
            address: '订房',
            caozuoyuan:'张三',
            caozuo:'操作'
          }, {
            date: '用户昵称-张三',
            name: '￥100.00',
            address: '商品购买',
            caozuoyuan:'张三',
            caozuo:'操作'
          }, {
            date: '用户昵称-张三',
            name: '￥100.00',
            address: '订房',
            caozuoyuan:'张三',
            caozuo:'操作'
            
          }, {
            date: '用户昵称-张三',
            name: '￥100.00',
            address: '订房',
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