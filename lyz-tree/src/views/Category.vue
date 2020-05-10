<template>
  <div id="category">
    <!-- <img src="../assets/image/1.jpg" alt=""> -->
    <div class="wrapper">
      <el-carousel class="swipt" :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <img style="width: 100%" :src="item.url" alt />
        </el-carousel-item>
      </el-carousel>
      <div class="hot">
        <div class="hot-header">
          <span class="hot-title">热门商品</span>
          <span @click="goTo" class="hot-btn">
            更多商品
            <i class="el-icon-d-arrow-right"></i>
          </span>
        </div>
        <div class="hot-shop">
          <div id="bigbox">
            <div
              v-for="(it,index) in hotList"
              :key="index"
              @click="getDetail(it._id)"
              class="hot-box"
            >
              <img :src="it.img" alt />
              <span class="name">{{it.product}}</span>
              <span class="price">{{it.price}}￥/棵</span>
            </div>
          </div>
        </div>
        <div class="hot-bottom">
          <span class="hot-bottom-title">
            <i @click="goLeft" class="el-icon-caret-left"></i>
            热卖
            <i @click="goRight" class="el-icon-caret-right"></i>
          </span>
        </div>
      </div>
      <div class="shop-cate">
        <div class="shop-cate-header">
          <span class="shop-cate-title">商品分类</span>
          <span @click="goTo" class="shop-cate-btn">
            更多商品
            <i class="el-icon-d-arrow-right"></i>
          </span>
        </div>
        <div class="shop-cate-box">
          <el-row>
            <el-col :span="5">
              <div class="shop-cate-left">
                <ul class="left-btn">
                  <li
                    @click="selectCategory(it.typeId,index)"
                    :class="{active:active==index}"
                    v-for="(it,index) in types"
                    :key="index"
                  >
                    {{it.typeName}}
                    <i class="el-icon-d-arrow-right"></i>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :span="19">
              <div class="shop-cate-right">
                <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
                  <li v-for="(it,index) in productList" :key="index" @click="getDetail(it._id)" class="infinite-list-item">
                    <el-card class="shop-card" :body-style="{ padding: '0px' }">
                      <img :src="it.img" />
                      <span class="name">{{it.product}}</span>
                      <span class="price">{{it.price}}￥/棵</span>
                    </el-card>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
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
  </div>
</template>

<script>
import axios from "axios";
import url from "@/servie.config.js";
export default {
  data() {
    return {
      active: 0,
      typeId: 1,
      start: 0,
      limit: 8,
      types: [],
      hotList: [],
      imgList: [
        { url: require("../assets/image/1.jpg") },
        { url: require("../assets/image/2.jpg") },
        { url: require("../assets/image/3.jpg") },
        { url: require("../assets/image/4.jpg") },
        { url: require("../assets/image/5.jpg") }
      ],
      productList: [],
      left: 0
    };
  },
  created() {
    axios({
      url: url.getType
    })
      .then(res => {
        this.types = res.data;
        this.selectCategory(this.typeId, this.active);
        // console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    axios({
      url: url.getProductList,
      method: "get",
      params: {
        start: 15,
        limit: 15
      }
    })
      .then(res => {
        this.hotList = res.data;
        // console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    selectCategory(typeId, index) {
      this.active = index;
      this.typeId = typeId;
      this.productList = [];

      this.getProductList();
    },
    goTo() {
      this.$router.push("/province");
    },
    goLeft() {
      var oDiv = document.getElementById("bigbox");
      if (this.left < 0) {
        oDiv.style.left = oDiv.offsetLeft + 1292 + "px";
        this.left = this.left + 1300;
        console.log(this.left);
      }
    },
    goRight() {
      var oDiv = document.getElementById("bigbox");
      if (this.left > -5200) {
        oDiv.style.left = oDiv.offsetLeft - 1308 + "px";
        this.left = this.left - 1300;
        console.log(this.left);
      }
    },
    getProductList() {
      axios({
        url: url.getProductsByType,
        method: "get",
        params: {
          typeId: this.typeId,
          start: this.productList.length,
          limit: this.limit
        }
      })
        .then(res => {
          if (res.data.length != 0) {
            this.productList = this.productList.concat(res.data);
          } else {
            console.log("no more");
          }
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    load() {
      setTimeout(() => {
        this.getProductList();
      }, 500);
    },
    getDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id: id
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#category {
  .wrapper {
    width: 1300px;
    margin: 0 auto;
    .swipt {
      margin-top: 15px;
    }
    .hot {
      .hot-header {
        height: 50px;
        width: 100%;
        background-color: rgba($color: #63a71c, $alpha: 0.5);
        line-height: 50px;
        color: white;
        margin-bottom: 15px;
        .hot-title {
          font-size: 20px;
          margin-left: 10px;
          font-weight: bolder;
        }
        .hot-btn {
          float: right;
          margin-right: 10px;
          font-size: 14px;
        }
      }
      .hot-bottom {
        margin-bottom: 15px;
        text-align: center;
        height: 35px;
        width: 100%;
        background-color: rgba($color: #63a71c, $alpha: 0.5);
        line-height: 35px;
        color: white;
        .hot-bottom-title {
          // margin-right: 10px;
          font-size: 20px;
          font-weight: bolder;
          i:hover {
            font-size: 22px;
          }
        }
      }
      .hot-shop {
        margin-bottom: 15px;
        height: 350px;
        // background: cadetblue;
        overflow: hidden;
        #bigbox {
          // background: cornflowerblue;
          position: relative;
          top: 0;
          left: 0;
          transition: left 0.8s linear 0s;
          height: 350px;
          width: 6500px;
          display: flex;
          align-items: center;
          .hot-box {
            position: relative;
            margin: 0 22.5px;
            width: 280px;
            height: 330px;
            background: #eee;
            border-radius: 1%;
            box-shadow: 10px 10px 5px #ccc;
            img {
              width: 260px;
              height: 260px;
              margin: 10px;
            }
            .name {
              position: absolute;
              bottom: 15px;
              left: 15px;
              font-size: 16px;
            }
            .price {
              position: absolute;
              bottom: 15px;
              right: 15px;
              color: rgba(228, 63, 13, 0.89);
              font-size: 18px;
            }
          }
        }
      }
    }
    .shop-cate {
      .shop-cate-header {
        height: 50px;
        width: 100%;
        background-color: rgba($color: #63a71c, $alpha: 0.5);
        line-height: 50px;
        color: white;
        margin-bottom: 15px;
        .shop-cate-title {
          font-size: 20px;
          margin-left: 10px;
          font-weight: bolder;
        }
        .shop-cate-btn {
          float: right;
          margin-right: 10px;
          font-size: 14px;
        }
      }
      .shop-cate-box {
        height: 600px;
        .shop-cate-left {
          height: 600px;
          background: rgba($color: rgb(107, 194, 53), $alpha: 0.5);
          .left-btn {
            .active {
              color: green;
              background-color: white;
              border: 1px solid green;
            }
            li {
              // margin-left: 20px;
              // background: chocolate;
              height: 60px;
              width: 100%;
              line-height: 60px;
              text-align: center;
              font-weight: bolder;
              color: white;
              letter-spacing: 5px;
              font-size: 20px;
              border-bottom: 1px solid rgb(107, 194, 53);
              i {
                margin-left: 10px;
              }
            }
          }
        }
        .shop-cate-right {
          height: 570px;
          // background: blue;
          .infinite-list {
            height: 600px;
            li {
              float: left;
              .shop-card {
                box-shadow: 10px 10px 5px #ccc;
                background: #eee;
                position: relative;
                margin: 15px;
                width: 220px;
                height: 270px;
                img {
                  width: 200px;
                  height: 200px;
                  margin: 10px;
                }
                .name {
                  font-size: 16px;
                  position: absolute;
                  bottom: 10px;
                  left: 10px;
                }
                .price {
                  font-size: 18px;
                  position: absolute;
                  bottom: 10px;
                  right: 10px;
                  color: rgba(228, 63, 13, 0.89);
                }
              }
            }
          }
        }
      }
    }
    .home-bottom {
      display: flex;
      justify-content: space-around;
      background: rgba(0, 0, 0, 0.3);
      width: 1300px;
      margin: 15px auto;
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
}
</style>