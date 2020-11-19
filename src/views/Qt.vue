<template>
    <div>
        <div>客房预订设置</div>
        <div style="margin-top: 15px;">
  最多可预订数：<el-input placeholder="0" v-model="input2">
    <template slot="append">个</template>
  </el-input>
</div>
<div slot="tip" class="el-upload__tip">单个订单最多可预订房间数，不填则不限</div>
 <div style="margin-top: 15px;">
  最多可预订天数：<el-input placeholder="60" v-model="input2">
    <template slot="append">天</template>
  </el-input>
</div>
<div slot="tip" class="el-upload__tip">订单最多可预订房晚，不填则默认60天 ; 可填写1~60天</div>
 <div style="margin-top: 15px;">
  预订日期范围：<el-input placeholder="120" v-model="input2">
    <template slot="append">天</template>
  </el-input>
</div>
<div slot="tip" class="el-upload__tip">订房日期范围；可填写1~120天。例：若今天是9号，填写2天，可订11号前离店的订单</div>
<div>
    <div>商城设置</div>
    <div style="margin-top: 15px;">
  订单关闭时间：<el-input placeholder="60" v-model="input2">
    <template slot="append">分钟</template>
  </el-input>
</div>
<div slot="tip" class="el-upload__tip">订单未付款，超过指定时间订单自动关闭</div>
<div style="margin-top: 15px;">
  发货超时时间：<el-input placeholder="15" v-model="input2">
    <template slot="append">天</template>
  </el-input>
</div>
<div slot="tip" class="el-upload__tip">发货超过指定时间未确认收货，订单自动完成</div>

</div>
<div>
            <button class="bc">保存</button>
        </div>
    </div>
</template>
<style scoped>
.el-input {
    width: 500px;
  }
  .el-upload__tip{
      margin-left: 120px;
  }
  .bc{
    width: 100px;
    height: 50px;
    background-color: blue;
    color: white;
    margin-left: 500px;
}
</style>