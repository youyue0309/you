<template>
  <div id="login-main">
    <div class="login">
      <el-input class="login-input" placeholder="用户名" v-model="username" clearable></el-input>
      <el-input class="login-input" placeholder="密码" v-model="password" show-password clearable></el-input>
      <el-button @click="loginHandler" class="login-btn" round>登录</el-button>
      <el-button @click="registHandler" class="login-btn" round>注册</el-button>
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
            })
              .then(() => {
                this.$message({
                  showClose: true,
                  message: "登录成功",
                  type: "success",
                  center: true
                });
                this.username = "";
                this.password = "";
                //保存登录状态
                this.loginAction(res.data.userInfo);
                this.$router.push("/");
              })
              .catch(err => {
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
#login-main {
  margin: 20px auto;
  height: 600px;
  width: 1300px;
  background-image: url("../assets/image/login.webp");
  background-size:1300px 600px;
  .login {
    height: 215px;
    width: 300px;
    margin: 0 auto;
    position: relative;
    top: 130px;
    background: rgba($color: #000000, $alpha: 0.6);
    border-radius: 1%;
    .login-input {
      margin: 20px 20px 0 20px;
      width: 260px;
    }
    .login-btn {
      // border: none;
      background-color: rgba($color: #000000, $alpha: 0.8);
      color: white;
      width: 100px;
      margin: 20px 20px 0 27px;
    }
  }
}
</style>
