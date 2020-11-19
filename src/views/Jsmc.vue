<template>
    <div>
        <div class="zb">
              <button>新增角色</button>
        </div>
        <div>
            <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="角色名称"
        width="1500">
      </el-table-column>
      <el-table-column
        prop="name"
        label="操作"
        width="180">
      </el-table-column>
      <!-- <el-table-column
        prop="address"
        label="地址">
      </el-table-column> -->
    </el-table>
        </div>
    </div>
</template>
<style scoped>
.zb{
    margin-left: 1400px;
}
</style>
 <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '超级管理员',
            name: '编辑  删除',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '普通管理员',
            name: '编辑  删除',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '角色名称',
            name: '编辑  删除',
            address: '上海市普陀区金沙江路 1519 弄'
          }
        ]
        }
      }
    }
  </script>