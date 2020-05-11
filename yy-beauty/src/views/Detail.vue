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
          <span>{{detail.chname}}</span>
        </div>
        <hr>
        <div class="guige">
          <h3>规格：</h3>
          <h4>色号：{{detail.color}}</h4>
          <h4>容量：{{detail.ml}}ml</h4>
        </div>
        <hr>
        <div class="price">
          <h3>价格：</h3>
          <span class="text">￥{{detail.price}}</span>
        </div>
        <div class="btn">
          <button @click="addOrder" class="buy">立即购买</button>
          <button @click="addCart" class="addcart">加入购物车</button>
        </div>
      </div>
    </div>
    <div class="bottom">
        <ul>
          <li>
            <i class="el-icon-truck"></i>
            <div class="text">
              <span>免费配送</span>
            </div>
            <div class="text">
              <span>所有订单均享免费顺丰速递</span>
            </div>
          </li>
          <li>
            <i class="el-icon-refresh-left"></i>
            <div class="text">
              <span>7天无理由退货</span>
            </div>
            <div class="text">
              <span>非定制商品订单自签收日起7天内可享无理由退货</span>
            </div>
          </li>
          <li>
            <i class="el-icon-shopping-bag-1"></i>
            <div class="text">
              <span>艺术包装</span>
            </div>
            <div class="text">
              <span>您的订单将尊享艺术包装并随附个性化定制祝福</span>
            </div>
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
    background: black;
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
        padding-left: 20px;
        color: black;
        .text {
          font-size: 20px;
          font-weight: 700;
        }
      }
      .sum {
        h3 {
          padding: 10px 0;
        }
        padding: 10px 20px;
      }
      .btn {
        padding: 60px 0;
        width: 100%;
        text-align: center;
        .buy {
          width: 100px;
          background: black;
          color: white;
          height: 50px;
          margin-right: 60px;
        }
        .addcart {
          width: 100px;
          border: 1px solid black;
          color: black;
          height: 50px;
        }
      }
    }
  }
  .bottom {
      height: 220px;
      background-color: black;
      color: white;
      text-align: center;
      ul {
        margin: 0 auto;
        padding: 35px 0;
        width: 780px;
        li {
          width: 200px;
          height: 150px;
          // line-height: 200px;
          text-align: center;
          float: left;
          margin: 0 30px;
          i {
            font-size: 35px;
            font-weight: 400;
            padding-bottom: 5px;
          }
          .text {
            padding: 5px 0;
            font-size: 16px;
          }
        }
      }
    }
}
</style>