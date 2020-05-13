<template>
  <div id="home">
    <div class="wrapper">
      <el-carousel class="swipt" :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="(item,index) in imgList" :key="index">
          <img style="width: 100%" :src="item.url" alt />
        </el-carousel-item>
      </el-carousel>
      <div class="sp-top">
        <div class="sp-top-header">
          <h2>最新</h2>
          <h1>精选</h1>
        </div>
        <div class="sp-bigbox">
          <i @click="moveLeft" class="left el-icon-arrow-left"></i>
          <i @click="moveRight" class="right el-icon-arrow-right"></i>
          <div class="sp-mid">
            <div id="large">
              <div @click="getDetail(it._id)" v-for="(it,index) in spList" :key="index" class="sp-mid-box">
                <img :src="it.img" alt />
                <div class="name">
                  <span>{{it.chname}}</span>
                </div>
                <div class="price">
                  <span>￥{{it.price}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hot">
        <div class="hot-header">
          <h2>经典</h2>
          <h1>热卖</h1>
        </div>
        <img src="../assets/image/hot/1.jpg" alt />
        <img class="img-left" src="../assets/image/hot/3.jpg" alt />
        <img class="img-right" src="../assets/image/hot/4.jpg" alt />
      </div>
      <div class="more">
        <div class="more-header">
          <span>发现更多</span>
          <i class="el-icon-bottom"></i>
        </div>
        <div class="bigbox">
          <div @click="getDetail(it._id)" v-for="(it,index) in hotList" :key="index" class="more-box">
            <img :src="it.img" alt />
            <div class="name">
              <span>{{it.chname}}</span>
            </div>
            <div class="price">
              <span>￥{{it.price}}</span>
            </div>
          </div>
        </div>
      </div>
      <div @click="backTop" class="back-top">
        <span>回到顶部</span>
        <i class="el-icon-top"></i>
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
  </div>
</template>

<script>
import axios from "axios";
import url from "@/servie.config.js";
export default {
  data() {
    return {
      hotList: [],
      spList: [],
      left: 0,
      imgList: [
        { url: require("../assets/image/lunbo/1.jpg") },
        { url: require("../assets/image/lunbo/2.jpg") },
        { url: require("../assets/image/lunbo/3.jpg") },
        { url: require("../assets/image/lunbo/4.jpg") },
        { url: require("../assets/image/lunbo/5.jpg") },
        { url: require("../assets/image/lunbo/6.jpg") }
      ]
    };
  },
  created(){
    axios({
      url: url.getProductList,
      method: "get",
      params: {
        start: 15,
        limit: 10
      }
    })
      .then(res => {
        this.hotList = res.data;
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
        this.spList = res.data;
        // console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    moveLeft() {
      var oDiv = document.getElementById("large");
      if (this.left < 0) {
        oDiv.style.left = oDiv.offsetLeft + 1015 + "px";
        this.left = this.left + 1110;
        // console.log(this.left);
      }
    },
    moveRight() {
      var oDiv = document.getElementById("large");
      if (this.left > -4440) {
        // console.log(oDiv.style.left);
        // console.log(oDiv.offsetLeft);
        oDiv.style.left = oDiv.offsetLeft - 1205 + "px";
        // console.log(oDiv.style.left);
        this.left = this.left - 1110;
        // console.log(this.left);
      }
    },
    backTop() {
      var timer = setInterval(function() {
        // console.log(document.body.scrollTop);
        // console.log(document.documentElement.scrollTop);
        document.documentElement.scrollTop =
          document.documentElement.scrollTop - 50;
        if (document.documentElement.scrollTop == 0) {
          clearInterval(timer);
        }
      }, 1);
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
#home {
  .wrapper {
    width: 1300px;
    height: 10px;
    margin: 0 auto;
    .swipt {
      margin-top: 15px;
      img {
        height: 100%;
      }
    }
    .sp-top {
      margin-top: 15px;
      margin-bottom: 15px;
      background-color: #f6f6f6;
      .sp-top-header {
        text-align: center;
      }
      .sp-bigbox {
        i:hover {
          font-size: 35px;
          background-color: rgba($color: rgb(216, 216, 216), $alpha: 0.3);
          border-radius: 50%;
        }
        height: 450px;
        // line-height: 400px;
        font-size: 30px;
        font-weight: bolder;
        position: relative;
        .right {
          position: absolute;
          top: 220px;
          right: 55px;
        }
        .left {
          position: absolute;
          top: 220px;
          left: 55px;
        }
        .sp-mid {
          width: 1110px;
          height: 450px;
          // background-color: aquamarine;
          margin: 0 auto;
          overflow: hidden;
          #large {
            position: relative;
            left: 0;
            top: 0;
            transition: left 0.8s linear 0s;
            height: 450px;
            width: 5550px;
            display: flex;
            align-items: center;
            .sp-mid-box {
              position: relative;
              margin: 0 10px;
              width: 350px;
              height: 420px;
              background: #eee;
              border-radius: 1%;
              box-shadow: 10px 10px 5px #ccc;
              img {
                width: 330px;
                height: 330px;
                margin: 10px;
              }
              .name {
                font-size: 14px;
                font-weight: 400;
                text-align: center;
                padding-bottom: 10px;
              }
              .price {
                text-align: center;
                font-size: 15px;
              }
            }
          }
        }
      }
    }
    .hot {
      text-align: center;
      padding-bottom: 15px;
      width: 1300px;
      // background: chartreuse;
      .img-left {
        width: 50%;
      }
      .img-right {
        width: 50%;
      }
    }
    .more {
      .more-header {
        height: 50px;
        text-align: center;
        line-height: 50px;
        background-color: black;
        color: white;
        font-size: 16px;
        margin-bottom: 15px;
      }
      .bigbox {
        overflow: hidden;
        padding-bottom: 15px;
        .more-box {
          text-align: center;
          float: left;
          // background-color: violet;
          width: 610px;
          height: 610px;
          margin: 10px 20px;
          img {
            width: 590px;
            height: 500px;
            padding: 10px;
          }
          .name {
            padding: 10px 0;
          }
          .price {
            font-size: 18px;
          }
        }
      }
    }
    .back-top {
      height: 50px;
      background: black;
      text-align: center;
      color: white;
      line-height: 50px;
      font-size: 18px;
      margin: 10px 0;
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
}
</style>