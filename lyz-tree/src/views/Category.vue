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
            <div v-for="(it,index) in hotList" :key="index" class="hot-box">
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
                  <li v-for="(it,index) in productList" :key="index" class="infinite-list-item">
                    <el-card class="shop-card" :body-style="{ padding: '0px' }">
                      <img :src=it.img />
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
      hotList: [
        {
          product: "连翘苗价格",
          noprice: "1.80元/棵",
          img:
            "http://img.xbmiaomu.com/file/upload/201701/04/19-37-13-45-96885.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "山西 运城",
          data: "2020/4/6 11:48",
          high: "50",
          r: "0",
          guanfu: "0",
          dijing: "0.3",
          lessnum: "1000 棵",
          productsum: "500000 棵",
          price: 1.80
        },
        {
          product: "苹果苗",
          noprice: "3.50元/棵",
          img:
            "http://img.xbmiaomu.com/file/upload/202003/13/18340788103589.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "山东 泰安",
          data: "2020/4/6 10:49",
          high: "150",
          r: "3",
          guanfu: "10",
          dijing: "5",
          lessnum: "100 棵",
          productsum: "1000000 棵",
          price: 3.50
        },
        {
          product: "苹果苗",
          noprice: "2.00元/棵",
          img:
            "http://img.xbmiaomu.com/file/upload/202003/12/20010876108875.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "山东 泰安",
          data: "2020/4/6 10:41",
          high: "150",
          r: "2",
          guanfu: "2",
          dijing: "5",
          lessnum: "100 棵",
          productsum: "9999 棵",
          price: 2.00
        },
        {
          product: "云南拟单性木兰",
          noprice: "面议",
          img:
            "http://img.xbmiaomu.com/file/upload/201902/27/17260227105477.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "云南 文山壮族苗族自治州",
          data: "2020/4/6 10:25",
          high: "null",
          r: "null",
          guanfu: "null",
          dijing: "null",
          lessnum: "null",
          productsum: "null",
          price: 3.15
        },
        {
          product: "新疆杨、北京杨",
          noprice: "面议",
          img:
            "http://img.xbmiaomu.com/file/upload/201609/19/16-48-59-39-74849.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "内蒙古 巴彦淖尔",
          data: "2020/4/5 22:54",
          high: "null",
          r: "null",
          guanfu: "null",
          dijing: "null",
          lessnum: "null",
          productsum: "null",
          price: 6.10
        },
        {
          product: "花椒树苗种植前景",
          noprice: "0.35元/棵",
          img:
            "http://img.xbmiaomu.com/file/upload/201809/18/0953473699871.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "山西 运城",
          data: "2020/4/5 20:51",
          high: "50",
          r: "1",
          guanfu: "20",
          dijing: "0.5",
          lessnum: "1000 棵",
          productsum: "6000000 棵",
          price: 0.35
        },
        {
          product: "当年结果核桃苗",
          noprice: "1.00元/棵",
          img:
            "http://img.xbmiaomu.com/file/upload/201709/24/07-39-04-11-10687.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "山西 运城",
          data: "2020/4/5 20:50",
          high: "100",
          r: "1",
          guanfu: "20",
          dijing: "1",
          lessnum: "100 棵",
          productsum: "1680000 棵",
          price:1.00
        },
        {
          product: "白皮松",
          noprice: "面议",
          img:
            "http://img.xbmiaomu.com/file/upload/201404/04/08-18-29-64-77822.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "山西 运城",
          data: "2020/4/5 19:33",
          high: "null",
          r: "null",
          guanfu: "null",
          dijing: "null",
          lessnum: "null",
          productsum: "null",
          price:3.00
        },
        {
          product: "月季树",
          noprice: "面议",
          img:
            "http://img.xbmiaomu.com/file/upload/201706/24/13-14-53-29-98029.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "河南 南阳",
          data: "2020/4/5 15:27",
          high: "null",
          r: "null",
          guanfu: "null",
          dijing: "null",
          lessnum: "null",
          productsum: "null",
          price: 5.12
        },
        {
          product: "蜀侩",
          noprice: "面议",
          img:
            "http://img.xbmiaomu.com/file/upload/201709/26/14-03-42-10-99889.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "山西 运城",
          data: "2020/4/5 14:57",
          high: "100",
          r: "null",
          guanfu: "60",
          dijing: "null",
          lessnum: "100 棵",
          productsum: "100000 棵",
          price: 6.23
        },
        {
          product: "山楂苗",
          noprice: "3.00元/棵",
          img:
            "http://img.xbmiaomu.com/file/upload/201709/07/17-58-35-43-99665.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "山西 运城",
          data: "2020/4/5 14:56",
          high: "null",
          r: "null",
          guanfu: "null",
          dijing: "null",
          lessnum: "100 棵",
          productsum: "100000 棵",
          price: 3.00
        },
        {
          product: "山楂树价格",
          noprice: "面议",
          img:
            "http://img.xbmiaomu.com/file/upload/201803/15/15-21-44-34-101152.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "山西 运城",
          data: "2020/4/5 14:56",
          high: "null",
          r: "null",
          guanfu: "null",
          dijing: "null",
          lessnum: "100 棵",
          productsum: "100000 棵",
          price: 1.32
        },
        {
          product: "白皮松价格",
          noprice: "1.00元/棵",
          img:
            "http://img.xbmiaomu.com/file/upload/201803/11/19-02-26-26-101233.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "山西 运城",
          data: "2020/4/5 14:56",
          high: "null",
          r: "null",
          guanfu: "null",
          dijing: "null",
          lessnum: "null",
          productsum: "1000000 棵",
          price: 4.23
        },
        {
          product: "老人葵",
          noprice: "面议",
          img:
            "http://img.xbmiaomu.com/file/upload/201111/05/11-13-36-85-29387.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "福建 漳州",
          data: "2020/4/5 14:55",
          high: "null",
          r: "null",
          guanfu: "null",
          dijing: "null",
          lessnum: "null",
          productsum: "null",
          price:2.00
        },
        {
          product: "6公分山楂树价格",
          noprice: "面议",
          img:
            "http://img.xbmiaomu.com/file/upload/201711/11/12-08-04-99-100101.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "山西 运城",
          data: "2020/4/5 14:55",
          high: "null",
          r: "null",
          guanfu: "null",
          dijing: "null",
          lessnum: "100 棵",
          productsum: "100000 棵",
          price: 3.00
        },
        {
          product: "油松",
          noprice: "20.00元/棵",
          img:
            "http://img.xbmiaomu.com/file/upload/201802/26/14-09-41-87-100594.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "山西 运城",
          data: "2020/4/5 14:55",
          high: "200",
          r: "null",
          guanfu: "120",
          dijing: "null",
          lessnum: "10 棵",
          productsum: "100000 棵",
          price: 1.00
        },
        {
          product: "8公分梨树价格",
          noprice: "面议",
          img:
            "http://img.xbmiaomu.com/file/upload/201702/25/21-05-30-82-97345.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "山西 运城",
          data: "2020/4/5 14:54",
          high: "null",
          r: "null",
          guanfu: "null",
          dijing: "null",
          lessnum: "null",
          productsum: "10000 棵",
          price: 5.00
        },
        {
          product: "3公分樱桃树价格",
          noprice: "30.00元/棵",
          img:
            "http://img.xbmiaomu.com/file/upload/201909/05/2018067299529.gif?x-oss-process=style/PC_sell-list.120x120",
          city: "山西 运城",
          data: "2020/4/5 14:54",
          high: "null",
          r: "null",
          guanfu: "null",
          dijing: "3",
          lessnum: "100 棵",
          productsum: "100000 棵",
          price:1.00
        },
        {
          product: "草莓苗",
          noprice: "0.35元/棵",
          img:
            "http://img.xbmiaomu.com/file/upload/201706/06/13-19-13-77-98891.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "山东 泰安",
          data: "2020/4/5 13:17",
          high: "15",
          r: "null",
          guanfu: "null",
          dijing: "null",
          lessnum: "100 棵",
          productsum: "500000 棵",
          price:3.00
        },
        {
          product: "垂柳 旱柳 ",
          noprice: "面议",
          img:
            "http://img.xbmiaomu.com/file/upload/201509/13/16-17-13-64-90106.jpg?x-oss-process=style/PC_sell-list.120x120",
          city: "河北 保定",
          data: "2020/4/5 10:02",
          high: "null",
          r: "null",
          guanfu: "null",
          dijing: "null",
          lessnum: "null",
          productsum: "null",
          price:5.00
        }
      ],
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