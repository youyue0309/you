<template>
  <div id="home">
    <div class="home-main">
      <!-- <img class="home-back" src="../assets/image/home.jpg" alt=""> -->
      <div class="login">
        <input v-model="username" placeholder="用户名：" class="login-user" type="text" />
        <input v-model="password" placeholder="密码：" class="login-password" type="password" />
        <button @click="loginHandler" class="login-btn">登录</button>
        <!-- <el-button size="medium" type="success">成功按钮</el-button> -->
        <button @click="registHandler" class="login-btn">注册</button>
      </div>
    </div>
    <div class="home-bottom">
      <ul>
        <li class="bottom-title">消费保障</li>
        <li>
          <a href="#">手机验证</a>
        </li>
        <li>
          <a href="#">资料审核</a>
        </li>
        <li>
          <a href="#">信息真实保障</a>
        </li>
        <li>
          <a href="#">担保交易</a>
        </li>
      </ul>
      <ul>
        <li class="bottom-title">支付方式</li>
        <li>
          <a href="#">在线支付</a>
        </li>
        <li>
          <a href="#">银行转账</a>
        </li>
        <li>
          <a href="#">货到付款</a>
        </li>
      </ul>
      <ul>
        <li class="bottom-title">服务条款</li>
        <li>
          <a href="#">会员服务</a>
        </li>
        <li>
          <a href="#">广告服务</a>
        </li>
        <li>
          <a href="#">协议修订</a>
        </li>
        <li>
          <a href="#">法律解释</a>
        </li>
      </ul>
      <ul>
        <li class="bottom-title">关于我们</li>
        <li>
          <a href="#">关于本站</a>
        </li>
        <li>
          <a href="#">网站域名</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/servie.config.js";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(['loginAction']),
    //注册的处理方法
    registHandler() {
      axios({
        url: url.registUser,
        method: "post",
        data: {
          userName: this.username,
          password: this.password
        }
      })
        .then(res => {
          if (res.data.code == 200) {
            // console.log('s');
            this.$message({
              showClose: true,
              message: "注册成功",
              type: "success",
              center: true
            });
            this.username = "";
            this.password = "";
          } else {
            this.$message({
              showClose: true,
              message: "注册失败",
              type: "error",
              center: true
            });
          }
        })
        .catch(err => {
          this.$message({
            showClose: true,
            message: "注册失败",
            type: "error",
            center: true
          });
          console.log(err);
        });
    },
    //登录
    loginHandler() {
      axios({
        url: url.loginUser,
        method: "post",
        data: {
          userName: this.username,
          password: this.password
        }
      })
        .then(res => {
          // console.log(res);
          if (res.data.code == 200) {
            new Promise((resolve, reject) => {
              //模拟请求时间
              setTimeout(() => {
                resolve();
              }, 1000);
            }).then(() => {
              this.$message({
                showClose: true,
                message: "登录成功",
                type: "success",
                center: true
              });
              this.username = "";
              this.password = "";
              this.loginAction(res.data.userInfo);
              this.$router.push('/category');
            }).catch(err=>{
              this.$message({
                showClose: true,
                message: "保存登录失败",
                type: "error",
                center: true
              });
            });
          }else{
            this.$message({
              showClose: true,
              message: "登录失败",
              type: "error",
              center: true
            });
          }
        })
        .catch(err => {
          this.$message({
            showClose: true,
            message: "登录失败",
            type: "error",
            center: true
          });
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  .home-main {
    background-image: url("../assets/image/home.jpg");
    background-size: 1280px 900px;
    width: 1280px;
    height: 900px;
    margin: 20px auto;
    position: relative;
    .login {
      width: 350px;
      height: 300px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 5%;
      position: absolute;
      top: 150px;
      right: 150px;
      text-align: center;
      .login-user {
        margin-top: 40px;
        height: 40px;
        width: 300px;
        background: #f8f8f8;
      }
      .login-password {
        margin-top: 20px;
        height: 40px;
        width: 300px;
        background: #f8f8f8;
      }
      .login-btn {
        margin-top: 10px;
        background: #63a71c;
        width: 300px;
        height: 50px;
        color: #f8f8f8;
        font-size: 18px;
      }
    }
  }
  .home-bottom {
    display: flex;
    justify-content: space-around;
    background: rgba(0, 0, 0, 0.3);
    width: 1280px;
    margin: 0 auto;
    height: 200px;
    ul {
      margin-top: 30px;
      .bottom-title {
        font-size: 20px;
        margin-bottom: 5px;
        font-weight: bolder;
      }
      a {
        color: #000;
      }
      a:hover {
        color: rgba(250, 0, 0, 1);
        text-decoration: underline;
      }
    }
  }
}
</style>