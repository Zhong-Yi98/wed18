<template>
    <div>
        <div>
            <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
<div slot="tip" class="el-upload__tip">支持jpg .jpeg .bmp .png格式，大小不超过2M，</div>
<div slot="tip" class="el-upload__tip">最多上传20张，建议尺寸：750px * 375px</div>
<p>酒店名称 *：</p>
<div class="wz">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
</div>
<p>联系电话 *：</p>
<div class="wz">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
</div>
<div slot="tip" class="el-upload__tip1">固定电话需加区号；区号、分机号均用“-”连接，不超过15个字符</div>
<div style="margin-top: 15px;">
    地区 *：<el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>&nbsp;&nbsp;&nbsp;
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>&nbsp;&nbsp;&nbsp;
    <el-select v-model="select" slot="prepend" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
</div>
<p>详细地址 *：</p>
<div class="wz">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
</div>
        </div>
        <div slot="tip" class="el-upload__tip1">100个字符以内</div>
        <p>位置坐标 *：</p>
        <div class="cd"><el-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</el-input></div>
<div><img src="../assets/2.png"></div>
<div>
    <p>配套设施</p>
    <div>
        <p>酒店标签 *：</p>
        <div class="kd">
            <el-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</el-input>
        </div>
        <div class="q2">
                        <el-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</el-input>
        </div>
        <div class="q1">
                        <el-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</el-input>
        </div>
        <div class="ya"><p>添加</p></div>
    </div>
</div>
<div>
    <div>
        <p>店内设施 *：</p>
        <div class="kd">
            <el-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</el-input>
        </div>
        <div class="q2">
                        <el-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</el-input>
        </div>
        <div class="q1">
                        <el-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</el-input>
        </div>
        <div class="ya"><p>添加</p></div>
    </div>
    <div>客房设施 *：<button class="ys">添加配套服务</button></div>
    
    交通指引：<div class="k1">
        <el-input
  type="textarea"
  placeholder="请输入内容"
  v-model="textarea"
  maxlength="30"
  show-word-limit
>
</el-input>
    </div>
        酒店政策：<div class="k1">
        <el-input
  type="textarea"
  placeholder="请输入内容"
  v-model="textarea"
  maxlength="30"
  show-word-limit
>
</el-input>
    </div>
    <div>
            <button class="bc">保存</button>
        </div>
</div>
    </div>
</template>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .wz{
      width: 500px;
      margin-left: 100px;
      margin-top: -45px;
  }
  .el-upload__tip1{
      margin-left: 100px;
  }
  .cd{
      width: 400px;
      margin-top: -40px;
      margin-left: 100px;
  }
  .kd{
      width: 100px;
      margin-left: 80px;
      margin-top: -50px;
  }
    .q2{
      width: 100px;
            margin-left: 200px;
      margin-top: -40px;
  }
    .q1{
      width: 100px;
            margin-left: 320px;
      margin-top: -40px;
  }
  .ya{
      margin-left: 450px;
      margin-top: -45px;
      color: rgb(101, 101, 252);
  }
  .ys{
      height: 50px;
      background-color: white;
      color: blue;
  }
  .k1{
      width: 500px;
      margin-left: 100px;
      margin-top: -20px;
  }
    .bc{
    width: 100px;
    height: 50px;
    background-color: blue;
    color: white;
    margin-left: 500px;
}
</style>

<script>
  export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
<script>
export default {
  data() {
    return {
      input: '',
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  }
}
</script>
