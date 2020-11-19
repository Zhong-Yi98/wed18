<template>
  <div class="app">
    <div class="top">
     <el-dropdown>
  筛选条件:<el-button type="primary">
    手机号<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>姓名</el-dropdown-item>
    <el-dropdown-item>昵称</el-dropdown-item>
    <el-dropdown-item>手机号</el-dropdown-item>
    <el-dropdown-item>会员卡号</el-dropdown-item>
    <el-dropdown-item>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    </div>
    <div class="pb">
      <input type="text" class="login_text" placeholder="请输入搜索内容"/>
    </div>
    <div class="cx">
      <button>查询</button>
    </div>
    <div>
        <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="用户信息"
      width="280">
    </el-table-column>
    <el-table-column
      prop="name"
      label="手机号码"
      width="280">
    </el-table-column>
    <el-table-column
      prop="province"
      label="可用于额"
      width="280">
    </el-table-column>
    <el-table-column
      prop="city"
      label="可用积分"
      width="280">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="280">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
        <el-button type="text" size="small">修改积分</el-button>
        <el-button type="text" size="small">充值</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
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
</template>
<style scoped>
/* .app{
  width: 1300px;
  height: 500px;
  float: left;
  margin: 30px 0px;
} */
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.top {
  margin-left: -1100px;
  
}
.pb {
  margin-left: -770px;
  margin-top: -30px;
}
.cx {
  margin-left: -540px;
  margin-top: -20px;
}
</style>
<script>
export default {
  methods: {
    handleClick() {
      alert("button click");
    },
  },
};
</script>
<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
            handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '15212345678',
          province: '1000.00',
          city: '876',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '15212345234',
          province: '0.00',
          city: '89',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '13712653746',
          province: '200.00',
          city: '2000',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '19987760987',
          province: '1280.82',
          city: '3298',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }
        , {
          date: '2016-05-03',
          name: '19987760987',
          province: '1280.82',
          city: '3298',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }],
         currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    }
  }
</script>