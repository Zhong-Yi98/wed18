<template>
     <div>
         <div>
            <el-button type="text" @click="dialogFormVisible = true">添加分类</el-button>

<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    是否显示：<el-radio disabled v-model="radio" label="禁用">备选项</el-radio>
  <el-radio disabled v-model="radio" label="选中且禁用">备选项</el-radio>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
         </div>
         <div>
             <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="分类名称"
      width="500">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="商品数量"
      width="600">
    </el-table-column>
    <el-table-column
      prop="address"
      label="操作"
      show-overflow-tooltip>
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">增加子分类</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
         </div>
     </div>
</template>
<style scoped>

.zj{
    width: 100px;
    height: 30px;
}
</style>
<script>
  export default {
    data() {
      return {
          radio: '选中且禁用',
        tableData: [{
          date: '服装',
          name: '150',
          address: '增加子分类    编辑    删除'
        }, {
          date: '毛衣',
          name: '50',
          address: '增加子分类    编辑    删除'
        }, {
          date: 'T恤',
          name: '20',
          address: '编辑    删除'
        }, {
          date: '西装',
          name: '30',
          address: '编辑    删除'
        }, {
          date: '配饰',
          name: '50',
          address: '编辑    删除'
        }, {
          date: '配饰',
          name: '33',
          address: '增加子分类    编辑    删除'
        }, {
          date: '裙子',
          name: '20',
          address: '编辑    删除'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '110px',
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>