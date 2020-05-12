<template>
  <div id="cart">
    <div class="wrapper">
      <div v-for="(item,index) in productList" :key="index" class="card">
        <img :src="item.img" alt />
        <div class="msg">
          <div class="name">
            <span>{{item.chname}}</span>
          </div>
          <div class="price">
            <span>￥{{item.price}}</span>
            <span>x1</span>
          </div>
          <div class="btn">
            <button @click="delCart(item._id,index)">删除</button>
          </div>
        </div>
      </div>
      <div class="sumprice">
        <span class="jisuan">合计:{{sum}}￥</span>
        <button @click="onSubmit">提交订单</button>
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
      productList: [],
      sum: 0.00
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
    created() {
      //验证用户是否登录
      if (JSON.stringify(this.userInfo) === "{}") {
        alert("请先登录");
        setTimeout(() => {
          this.$router.push("/login");
        }, 1000);
      } else {
        axios({
          url: url.getCart,
          method: "get",
          params: {
            userId: this.userInfo._id
          }
        })
          .then(res => {
            for (let item of res.data) {
              this.productList.push(item.productId);
            }
            this.sumPrice();
            // console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
  methods: {
    onSubmit() {
      this.$router.push({
        path: "/order",
        query: {
          product: this.productList
        }
      });
    },
    delCart(id, index) {
      //删除数据库中的数据 如果删除成功 进入回调函数中，在回调函数中
      axios({
        url: url.delCart,
        method: "post",
        params: {
          id: id,
          userId: this.userInfo._id
        }
      })
        .then(res => {
          // console.log(res);
          this.productList.splice(index, 1);
        })
        .catch(err => {
          console.log(err);
        });
    },
    sumPrice() {
      for (var i = 0; i < this.productList.length; i++) {
        var r1, r2, m;
        try {
          r1 = this.sum.toString().split(".")[1].length;
        } catch (e) {
          r1 = 0;
        }
        try {
          r2 = this.productList[i].price.split(".")[1].length;
        } catch (e) {
          r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        this.sum = (this.sum * m + this.productList[i].price * m) / m;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
#cart {
  .wrapper {
    width: 800px;
    margin: 10px auto;
    .card {
      margin-top: 10px;
      background: #f8f8f8;
      height: 220px;
      display: flex;
      img {
        width: 200px;
        height: 200px;
        padding: 10px;
      }
      .msg {
        flex: 1;
        position: relative;
        .name {
          font-size: 25px;
          padding: 10px;
        }
        .price {
          position: absolute;
          top: 170px;
          right: 20px;
        }
        .btn {
          position: absolute;
          bottom: 93px;
          right: 20px;
          button {
            width: 80px;
            height: 30px;
            background: black;
            color: white;
          }
        }
      }
    }
    .sumprice{
        width: 800px;
        height: 40px;
        background: rgba($color: black, $alpha: 0.5);
        position: fixed;
        bottom: 0;
        line-height: 40px;
        button {
            width: 80px;
            height: 30px;
            background: black;
            color: white;
            position: absolute;
            top: 5px;
            right: 10px;
          }
          .jisuan{
              color: white;
              margin-left: 20px;
          }
    }
  }
}
</style>
