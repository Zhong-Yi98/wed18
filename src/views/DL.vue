<template>
    <div class="login_body">

        <div id="tupian">
                <div>
                    <img height="840px" width="100%"  src="../assets/u21.jpg">
                </div>
        </div>
        <div class="ydong">
            <div>
                <img src="../assets/u24.png">
            </div>
        <div>
            <input type="text" class="login_text" placeholder="账号/手机号/邮箱">
        </div>
        <div>
            <input type="password" class="login_text" placeholder="账号/手机号/邮箱">
        </div>
        <div class="login_btn">
            <router-link to="/gg">
            <input type="submit" value="登录">
            </router-link>
        </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"Login"
}
</script>
<style scoped>


.ydong{
    margin-top: -500px;
}
#tupian{
    margin: 0px 0px 0px 0px;
    background-image: url("../assets/u21.jpg");
}

    #content .login_body{
        width: 50%;
    }
    .login_body .login_text{
        width: 50%;
        height: 40px;
        border: none;
        border-bottom: 1px solid #ccc;
        margin: 0 5px;
        outline: none;

    }
    .login_body .login_btn{
        height: 50px;
        margin: 10px; text-align: center;
    }
    .login_body .login_btn input{
        width: 50%;
        height: 100%;
        background-color: #ac9191;
        border-radius: 3px;
        border: none;
         margin: 0 auto;
       color: rgb(218, 0, 0);  /*border: 1px solid red; */

    }
</style>