<template>
<div>
    
    <div class="wbkk">
        <div class="ydong">
            <el-form  label-width="80px">
  <el-form-item  label="输入搜索">
      <el-input v-model="input" placeholder="商品名称/商品货号"></el-input>
  </el-form-item>
</el-form>  
        </div>

 <div>
      <el-form  label-width="80px">
      <el-form-item label="商品分类">
    <el-select  placeholder="请选择商品分类">
      <el-option label="商品1" value="sp1"></el-option>
      <el-option label="商品2" value="sp2"></el-option>
    </el-select>
  </el-form-item>
</el-form>  
  </div>
   <div>
      <el-form  label-width="80px">
      <el-form-item label="上下架">
    <el-select  placeholder="全部">
      <el-option label="商品1" value="sp1"></el-option>
      <el-option label="商品2" value="sp2"></el-option>
    </el-select>
  </el-form-item>
</el-form>  
  </div>
  <div>
      <el-row>
        <el-button>查询</el-button>
        </el-row>
  </div>
  <div>
      <el-button type="primary">+添加商品</el-button>
  </div>
  <div>
       <div>
      <el-form  label-width="40px">
    <el-select style="width:120px"  placeholder="批量操作">
      
    </el-select>
</el-form>  
  </div>
  </div>
    </div>
 
</div>

</template>

<style scoped>
.wbkk{
width: 260px;
}
.ydong{
    margin: 0px 0px 0px 0px;
}
</style>

