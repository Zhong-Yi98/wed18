<template>
<div>
    <div class="bd">
        <p>套餐配置</p>
    </div>
    <div>
         <p class="wz">自定义金额</p>
    </div>
    <div class="tp">
       
        <el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
    </div>
    <div class="to1">
        <img src="../assets/1.png">
    </div>
    <div>
        <button class="qw">添加套餐</button>
    </div>
    
</div>

</template>
<style scoped>
.bd{
    font-size: 30px;
    margin-left: -1400px;
}
.tp{
    margin-left: -1250px;
    margin-top: -35px;
}
.wz{
    margin-left: -1400px;
}
.to1{
    margin-left: -1100px;
}
.qw{
width: 420px;
height: 100px;
margin-left: -1100px;
margin-top: -10px;
}
</style>
<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>