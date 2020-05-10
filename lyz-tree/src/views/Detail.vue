<template>
  <div id="detail">
    <div class="header">
      <i @click="$router.go(-1)" class="el-icon-back"></i>
      <span @click="$router.go(-1)">返回</span>
    </div>
    <div class="main">
      <img :src="detail.img" alt />
      <div class="delmsg">
        <div class="name">
          <span>{{detail.product}}</span>
        </div>
        <div class="guige">
          <h3>规格：</h3>
          <h4>高度：{{detail.high}}cm</h4>
          <h4>直径：{{detail.r}}cm</h4>
        </div>
        <div class="price">
          <h3>价格：</h3>
          <span class="text">￥{{detail.price}}元 地头价</span>
        </div>
        <div class="btn">
          <button @click="addOrder" class="buy">立即购买</button>
          <button @click="addCart" class="addcart">加入购物车</button>
        </div>
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
import { mapState } from "vuex";
export default {
  data() {
    return {
      num: 1,
      detail: {},
      arr: []
    };
  },
  created() {
    // console.log(this.$route.params.id);
    axios({
      url: url.getDetail,
      method: "get",
      params: {
        id: this.$route.query.id
      }
    })
      .then(res => {
        // console.log(res);
        this.detail = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    addCart() {
      //检查用户是否登录 前端vuex保存登录状态
      //如果后端保存登录状态 koa-session redis
      if (JSON.stringify(this.userInfo) === "{}") {
        alert("请先登录");
        setTimeout(() => {
          this.$router.push("/");
        }, 1000);
      } else {
        //插入购物车
        axios({
          url: url.addCart,
          method: "post",
          data: {
            productId: this.detail._id,
            userId: this.userInfo._id
          }
        })
          .then(res => {
            //   console.log(res);
            if (res.data.code == 200) {
              this.$message({
                showClose: true,
                message: res.data.message,
                type: "success",
                center: true
              });
            } else {
              console.log("error");
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    addOrder() {
      if (JSON.stringify(this.userInfo) === "{}") {
        alert("请先登录");
        setTimeout(() => {
          this.$router.push("/");
        }, 1000);
      } else {
        this.arr.push(this.detail);
        this.$router.push({
          path: "/order",
          query: {
            product: this.arr
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#detail {
  .header {
    width: 100%;
    height: 50px;
    background: rgb(138, 204, 23);
    line-height: 50px;
    color: white;
    font-size: 20px;
    i {
      padding-left: 20px;
    }
  }
  .main {
    width: 1100px;
    margin: 20px auto;
    height: 450px;
    background: #f8f8f8;
    display: flex;
    img {
      height: 430px;
      width: 500px;
      padding: 10px;
    }
    .delmsg {
      flex: 1;
      //   background: rosybrown;
      .name {
        padding: 20px;
        font-size: 30px;
        font-weight: 700;
      }
      .guige {
        padding: 0 20px;
      }
      .price {
        padding: 20px;
        color: #f6580e;
        .text {
          font-size: 20px;
        }
      }
      .sum {
        h3 {
          padding: 10px 0;
        }
        padding: 10px 20px;
      }
      .btn {
        padding: 20px 0;
        width: 100%;
        text-align: center;
        .buy {
          width: 100px;
          background: rgb(138, 204, 23);
          color: white;
          height: 50px;
          margin-right: 60px;
        }
        .addcart {
          width: 100px;
          border: 1px solid rgb(138, 204, 23);
          color: rgb(138, 204, 23);
          height: 50px;
        }
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