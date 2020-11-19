<template>
    <div>
        <div>
            <p>微信公众号配置</p>
        </div>
        <div class="sx">
            <p>公众号名称 *：<input type="text" class="login_text" placeholder="请输入搜索内容" /></p>
            <p>公众号原始id *：<input type="text" class="login_text1" placeholder="请输入搜索内容" /></p>
            <p>AppID *：<input type="text" class="login_text2" placeholder="请输入搜索内容" /></p>
            <p>Token *<input type="text" class="login_text3" placeholder="请输入搜索内容" /></p>
            <p>AppSecret *<input type="text" class="login_text4" placeholder="请输入搜索内容" /></p>
        </div>
        <div>
            <p>微信支付配置</p>
        </div>
        <div>
            <p>微信商户号 *：<input type="text" class="login_text" placeholder="请输入搜索内容" /></p>
            <p> 签名类型：<el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></p>
  <p>秘钥 *：<input type="text" class="login_text" placeholder="请输入搜索内容" /></p>
  <p><el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  证书 *：<el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">请上传包含apiclient_cert.pem、apiclient_key.pem证书文件的压缩包</div>
</el-upload></p>
<p>支付授权目录：<input type="text" class="login_text" placeholder="http://www.xxx.com/payment/weixinpay/" /></p>
<div slot="tip" class="el-upload__tip">请直接复制上述链接，前去微信支付商户平台填写</div>
        </div>
        <div>
            <button class="bc">保存</button>
        </div>
    </div>
</template>
<style scoped>
.sx{
    border-top: 1px solid rgb(194, 194, 193);    
} 
.login_text{
    width: 300px;
    height: 30px;
    margin-left: 15px;
}
.login_text1{
    width: 300px;
    height: 30px;
}
.login_text2{
    width: 300px;
    height: 30px;
    margin-left: 40px;
}
.login_text3{
    width: 300px;
    height: 30px;
    margin-left: 58px;
}
.login_text4{
    width: 300px;
    height: 30px;
    margin-left: 25px;
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
          
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>