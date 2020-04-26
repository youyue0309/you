<template>
  <div id="shop">
    <div class="wrapper">
      <div class="main">
        <el-row>
          <el-col :span="5">
            <div class="left-nav">
              <ul>
                <li class="title">专区</li>
                <li
                  v-for="(it,index) in types"
                  @click="selectCategory(it.typeId,index)"
                  :class="{active:active==index}"
                  :key="index"
                >{{it.typeName}}</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="19">
            <div class="shop-bigbox">
              <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
                <li v-for="(it,index) in productList" :key="index" class="card">
                  <img :src="it.img" alt />
                  <div class="name">
                    <span>{{it.chname}}</span>
                  </div>
                  <div class="price">
                    <span>￥{{it.price}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
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
      active: 0,
      typeId: 1,
      types: [],
      start: 0,
      limit: 6,
      productList: [],
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
  },
  methods: {
    selectCategory(typeId, index) {
      this.active = index;
      this.typeId = typeId;
      this.productList = [];

      this.getProductList();
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
          }else{
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
    }
  }
};
</script>

<style lang="scss" scoped>
#shop {
  .wrapper {
    width: 1300px;
    margin: 0 auto;
    .main {
      padding: 0 0 15px 0;
      .left-nav {
        margin-top: 15px;
        background-color: rgba($color: black, $alpha: 0.7);
        height: 785px;
        .active {
          color: black;
          background-color: white;
        }
        li {
          // padding-bottom: 2px;
          text-align: center;
          line-height: 70px;
          height: 70px;
          color: white;
          letter-spacing: 15px;
          font-size: 18px;
        }
        .title {
          font-size: 18px;
          font-weight: bolder;
        }
      }
      .shop-bigbox {
        .infinite-list{
          height: 785px;
        }
        .card {
          float: left;
          margin: 20px;
          width: 296px;
          height: 360px;
          // border: 1px solid #ccc;
          border-radius: 2%;
          background-color: #f8f8f8;
          box-shadow: 10px 10px 5px #ccc;
          img {
            width: 270px;
            height: 270px;
            padding: 10px 13px;
          }
          .name {
            text-align: center;
            height: 40px;
          }
          .price {
            text-align: center;
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
}
</style>