<template>
    <div>

            <div class="dingbuys">
               
            </div>
            
            <div class="ShoY">
                <span class="el-icon-s-home"><a href="#"> 首页</a></span>
            </div>

                <div class="mnue">
                    <div class="yid">
            <div class="mnue-tit">
			        <a href="#"><span><img style="width:25px" src="../image/touxiang.png"></span><span>用户昵称</span></a>
			        <em></em>
			        <div class="mnue-son">
				<ul>
					<li>
						<a href="#">修改密码</a>
					</li>
					<li>
						<a href="#">退出</a>
					</li>
				</ul>
			</div>
		</div>	
       </div>
	</div>
    
    <div class="wenben">
        <div style="margin-top: 15px;">
  
</div>
    </div>
    
  <Daohang></Daohang>
    
    <div>
    </div>
    
    <div class="webyd">
 <div class="Guiz">
         积分赠送规则
    </div>
    <div class="wenbenaa">
       <el-checkbox label="首次注册登录，可获得"></el-checkbox>
    </div>
    <div class="wenbenss">
           <div style="margin-top: 15px; width:250px">
  <el-input placeholder="10" v-model="input2">
    <template slot="append">积分</template>
  </el-input>
</div>
    </div>
    </div>
 <div>
    <div class="wenbenaa">
       <el-checkbox label="每笔消费1元即可获得"></el-checkbox>
    </div>
    <div class="wenbenss">
           <div style="margin-top: 15px; width:250px">
  <el-input placeholder="1" v-model="input2">
    <template slot="append">积分</template>
  </el-input>
</div>
    </div>
 </div>
 <div>
    <div class="wenbenaa">
       <el-checkbox label="每充值1元即可获得"></el-checkbox>
    </div>
    <div class="wenbenss">
           <div style="margin-top: 15px; width:250px">
  <el-input placeholder="1" v-model="input2">
    <template slot="append">积分</template>
  </el-input>
</div>
    </div>
 </div>
 <hr class="hr">
 <div class="webyd">
 <div class="Guizs">
         积分抵扣规则
    </div>
    <div class="wenbenaa">
       <el-checkbox label="不使用积分抵扣"></el-checkbox>
    </div>
    
    </div>
    <div class="webyd">
 
    <div class="wenbenad">
       
       <el-checkbox label="使用积分抵扣"></el-checkbox>
       
    </div>
    <div class="wenbenss">
           <div style="margin-top: 15px; width:250px">
  <el-input placeholder="100"  v-model="input2">
  </el-input>
</div>
    </div>
    </div>
    <div class="jifen">积分=1</div>
    <p></p>
    <br/>
    
 <div>
    <div class="wenbenaa">
       <el-checkbox label="单次消费最多使用"></el-checkbox>
    </div>
    <div class="wenbenss">
           <div style="margin-top: 15px; width:250px">
  <el-input placeholder="" v-model="input2">
    <template slot="append">积分</template>
  </el-input>
</div>
    </div>
 </div>



  <div class="JFGZ">
<p class="Gxuan">积分赠送规则：默认全部不勾选；</p>
<p>积分折扣规则：默认选择不使用积分抵扣；</p>
<p>积分过期规则：默认选择一直有效，永不过期；</p>
</div>

<div class="webyds">
 <div class="Guizs">
         积分过期规则
    </div>
    <div class="wenbenaa">
       <el-checkbox label="一直有效，永不过期"></el-checkbox>
    </div>
    <div class="wenbenaa">
       <el-checkbox label="获得的所有成长值，在"></el-checkbox>
       <el-dropdown>
  <el-button type="primary">
    当年<i class="el-icon-arrow-down el-icon--right"></i>
    
  </el-button>

  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item></el-dropdown-item>
    <el-dropdown-item>当年</el-dropdown-item>
    <el-dropdown-item>第2年</el-dropdown-item>
    <el-dropdown-item>第3年</el-dropdown-item>
    <el-dropdown-item>第4年</el-dropdown-item>
    <el-dropdown-item>第10年</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
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
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  }
}
</script>
<style scoped>

.JFGZ{
  margin: -100px -200px 0px 0px;
  font-size: 10px;
  color: rgb(241, 93, 93);
}
.jifen{
  margin: -30px 100px 0px 0px;
}
.hr{
  margin: 30px 0px 0px 238px;
  width: 1095px;
}
.wenbenss{
  margin: -45px 0px 0px 430px;
}
.wenbenaa{
  margin: 20px 880px 0px 0px;
}

.Gxuan{
margin: 0px 0px 0px 0px;

}

 .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

.wenben{
    margin: 106px 0px 0px 240px;
    width: 300px;
}
.webyd{
  margin: 60px 0px 0px 0px;
}

.webyds{
  margin: 120px 0px 0px 0px;
}
.daohang{
    width: 401px;
    height: 300px;
    margin-top: -98px;
}

.yid{
    margin: -20px 0px 0px 1100px;
}
* {
			margin: 0;
			padding: 0;
		}
		ul {
			list-style: none; 
		}
		a {
			text-decoration: none; 
			color: #666;
		}
	.Guiz{
    margin: -300px 950px 0px 0px;
}
.Guizs{
    margin: -20px 950px 0px 0px;
}


		.mnue-tit {
			margin: 0;
			width: 150px;
			height: 29px;
			margin: 0 auto;
		
		}

.wenbenad{
  margin: -30px 880px 0px 0px;
}

		.mnue-tit a span {
			margin-left: 0px;
		}
		.mnue-son {
			display: none;  /*隐藏下拉内容*/
			width: 150px;
			height: 65px;
			padding-top: 5px;
			background-color: #ddd;
		}
		.mnue-tit:hover .mnue-son {
			display: block;
		}
		.mnue-son li {
			text-align: center; /*显示下拉内容*/
			padding-top: 10px;
		}
		.mnue-son li:hover a {
			color: #e62310;
		}
.wenbena{
    margin: 25px 0px 0px -700px;
}
.dingbuys{
    margin-top: -70px;
    width:100%;
    height: 50px;
    background: #ecebeb
}
.ShoY{
    margin-left: -1200px;
    margin-top: -35px;
}
.fenye{
    margin: 20px 350px 0px 0px;
}
.biaodan{
    margin: -160px 0px 0px 230px;
}
a:link,a:visited{
 text-decoration:none;
}
.nicheng{
    margin: 0px -1100px 0px 0px; 
}




</style>