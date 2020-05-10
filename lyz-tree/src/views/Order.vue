<template>
  <div id="order">
    <div class="wrapper">
      <div class="title">
        <span>提交订单</span>
      </div>
      <div class="bar"></div>
      <div class="address">
        <div class="title">
          <span>收货人信息：</span>
        </div>
        <div class="text">
          <span>地址：{{userInfo.address}}</span>
        </div>
      </div>
      <div class="msg">
        <div class="title">
          <span>订单详情</span>
        </div>
        <div v-for="(it,index) in product" :key="index" class="ordermsg">
          <img :src="it.img" alt />
          <div class="price">
            <div class="num product">
              <span>商品价格：{{it.price}}</span>
              <span>x</span>
              <span>1￥</span>
            </div>
            <div class="num yun">
              <span>运费：0.00￥</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="sumprice">
        <span>总价：{{sum}}￥</span>
      </div>
      <div class="submit">
        <button @click="addOrder" class="btn">提交订单</button>
      </div>
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
      product: [],
      sum: 0.00,
      proId: "",
      arr: []
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {
    this.product = this.$route.query.product;
    // console.log(this.product);
    if (!this.product) {
      alert("请先购买商品");
      this.$router.push("/province");
    } else {
      this.sumPrice();
    }
    // console.log(this.userInfo);
  },
  methods: {
    addOrder() {
      axios({
        url: url.addOrder,
        method: "post",
        data: {
          productId: this.arr,
          userId: this.userInfo._id,
          userAddress: this.userInfo.address,
          price: this.sum
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
            this.$router.push('/province');
          } else {
            console.log("error");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    sumPrice() {
      for (var i = 0; i < this.product.length; i++) {
        var r1, r2, m;
        try {
          r1 = this.sum.toString().split(".")[1].length;
        } catch (e) {
          r1 = 0;
        }
        try {
          r2 = this.product[i].price.toString().split(".")[1].length;
        } catch (e) {
          r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        this.sum = (this.sum * m + this.product[i].price * m) / m;
        this.arr.push(this.product[i]._id);
      }
      console.log(this.arr);
    }
  }
};
</script>

<style lang="scss" scoped>
#order {
  .wrapper {
    width: 1300px;
    margin: 10px auto;
    .title {
      font-size: 25px;
      font-weight: 700;
      padding: 20px;
    }
    .bar {
      width: 1300px;
      height: 10px;
      background-color: #63a71c;
      opacity: 0.5;
      margin: 15px 0;
    }
    .address {
      .text {
        padding: 20px;
      }
    }
    .msg {
      .ordermsg {
        position: relative;
        //   width: 1300px;
        img {
          // margin: 0 auto;
          margin-left: 50px;
          width: 100px;
          height: 100px;
        }
        .num {
          // margin-left: 50px;
          position: absolute;
          top: 0;
          right: 10px;
        }
        .sum {
          top: 125px;
        }
        .product {
          top: 50px;
        }
        .yun {
          top: 77px;
        }
      }
    }
    .sumprice {
      float: right;
    }
    .submit {
      width: 1300px;
      padding-top: 20px;
      text-align: center;
      .btn {
        width: 100px;
        height: 40px;
        background-color: #63a71c;
        color: white;
      }
    }
  }
}
</style>