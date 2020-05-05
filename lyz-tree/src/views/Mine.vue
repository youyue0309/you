<template>
  <div id="mine">
    <div class="wrapper">
      <div class="means">
        <div class="title">
          <span>个人资料</span>
        </div>
        <div class="bar"></div>
        <div class="text">
          <div class="name">
            <span>用户名：{{detail.userName}}</span>
          </div>
          <div class="address">
            <span>地址：{{detail.address}}</span>
          </div>
          <div class="btn">
            <button @click="$router.push('/password')" class="buy">修改密码</button>
            <button class="addcart">修改地址</button>
          </div>
        </div>
      </div>
      <div class="order">
        <div class="title">
          <span>订单信息</span>
        </div>
        <div class="bar"></div>
        <div class="text">
          <div class="order">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import url from "@/servie.config.js";
export default {
  data() {
    return {
      detail: {}
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {
    axios({
      url: url.getuserDetail,
      method: "get",
      params: {
        username: this.userInfo.userName
      }
    })
      .then(res => {
        // console.log(res);
        this.detail = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
#mine {
  .wrapper {
    width: 1300px;
    margin: 15px auto;
    .means {
      .title {
        font-size: 25px;
        font-weight: 700;
        padding: 0 20px;
      }
      .bar {
        width: 1300px;
        height: 30px;
        background-color: #63a71c;
        opacity: 0.5;
        margin: 15px 0;
      }
      .text {
        div {
          padding: 10px;
        }
        .btn {
          padding: 20px 0;
          width: 300px;
          text-align: center;
          .buy {
            width: 100px;
            background: rgb(138, 204, 23);
            color: white;
            height: 30px;
            margin-right: 60px;
          }
          .addcart {
            width: 100px;
            border: 1px solid rgb(138, 204, 23);
            color: rgb(138, 204, 23);
            height: 30px;
          }
        }
      }
    }
    .order {
      .title {
        font-size: 25px;
        font-weight: 700;
        padding: 0 20px;
      }
      .bar {
        width: 1300px;
        height: 30px;
        background-color: #63a71c;
        opacity: 0.5;
        margin: 15px 0;
      }
      .text{
          .order{
              width: 1300px;
              margin-top: 10px;
              height: 100px;
              background: #f8f8f8;
          }
      }
    }
  }
}
</style>