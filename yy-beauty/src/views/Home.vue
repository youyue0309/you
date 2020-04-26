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
              <div v-for="(it,index) in spList" :key="index" class="sp-mid-box">
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
          <div v-for="(it,index) in hotList" :key="index" class="more-box">
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
export default {
  data() {
    return {
      hotList: [
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/1/118000_7.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "10.97",
          chname:
            "：ST.MORIZ ADVANCED PRO FORMULA exfoliating skin primer 200 m",
          Enname: "：ADVANCED PRO FORMULA exfoliating skin primer 200 m",
          ml: "：200"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/1/118001_7.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "6.38",
          chname: "：ST.MORIZ ADVANCED PRO FORMULA tan enhancer 200 ml",
          Enname: "：ADVANCED PRO FORMULA tan enhancer 200 ml",
          ml: "：200"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/1/118002_7.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "9.58",
          chname:
            "：ST.MORIZ ADVANCED PRO FORMULA 5in1 tanning mousse #medium 2",
          Enname: "：ADVANCED PRO FORMULA 5in1 tanning mousse #medium 2",
          ml: "：200"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/1/118003_7.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "16.46",
          chname:
            "：ST.MORIZ ADVANCED PRO FORMULA 5in1 tanning mousse #dark 200",
          Enname: "：ADVANCED PRO FORMULA 5in1 tanning mousse #dark 200",
          ml: "：200"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/1/118007_7.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "20.87",
          chname:
            "：ST.MORIZ ADVANCED PRO FORMULA dry oil self tanning mist 100",
          Enname: "：ADVANCED PRO FORMULA dry oil self tanning mist 100",
          ml: "：150"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/1/118356_14.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "41.86",
          chname: "：CHANEL香奈儿 山茶花唇膏限量版 3.5g #327-camélia blanc",
          Enname: "：ROUGE ALLURE CAMÉLIA #327-camélia blanc",
          color: "：#327"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/1/118357_14.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "41.97",
          chname: "：CHANEL香奈儿 山茶花唇膏限量版 3.5g #337-camélia rose",
          Enname: "：ROUGE ALLURE CAMÉLIA #337-camélia rose",
          color: "：#337"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/1/118358_14.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "41.90",
          chname:
            "：CHANEL香奈儿 山茶花唇膏限量版 3.5g #607-camélia rouge métal",
          Enname: "：ROUGE ALLURE CAMÉLIA #607-camélia rouge métal",
          color: "：#607"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/1/118359_14.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "41.92",
          chname: "：CHANEL香奈儿 山茶花唇膏限量版 3.5g #637-camélia pourpre",
          Enname: "：ROUGE ALLURE CAMÉLIA #637-camélia pourpre",
          color: "：#637"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/1/118360_14.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "42.06",
          chname: "：CHANEL香奈儿 炫亮魅力唇膏 3.5g #347-camélia fuchsia",
          Enname: "：ROUGE ALLURE VELVET CAMÉLIA #347-camélia fuchsia",
          color: "：#347"
        }
      ],
      spList: [
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/3/1350-44210_11_1.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "20.86",
          chname:
            " DR.HAUSCHKA 德国世家 遮瑕膏 2.5ml #02-chestnut  Dr. Hauschka",
          Enname: " Concealer #02-chestnut  Dr. Hauschka 2 5 ml",
          color: " 02 Chestnut"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/3/1350-43862_11_1.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "28.77",
          chname: " DR.HAUSCHKA 德国世家 粉饼 8g #01-macadamia  Dr. Hauschka",
          Enname: " Compact Powder #01-macadamia  Dr. Hauschka 8 g",
          color: " 01 Macadamia"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/3/1350-44227_11_1.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "20.86",
          chname: " DR.HAUSCHKA 德国世家 遮瑕膏 2.5ml #03-nutmeg  Dr. Hauschka",
          Enname: " Concealer #03-nutmeg  Dr. Hauschka 2 5 ml",
          color: " 03 Nutmeg"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/3/1350-43855_11_1.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "28.77",
          chname: " DR.HAUSCHKA 德国世家 粉饼 8g #02-chestnut  Dr. Hauschka",
          Enname: " Compact Powder #02-chestnut  Dr. Hauschka 8 g",
          color: " 02 Chestnut"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/3/1350-43848_11_1.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "28.77",
          chname: " DR.HAUSCHKA 德国世家 粉饼 8g #03-nutmeg  Dr. Hauschka",
          Enname: " Compact Powder #03-nutmeg  Dr. Hauschka 8 g",
          color: " 03 Nutmeg"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/3/1350-43664_11_1.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "32.67",
          chname:
            " DR.HAUSCHKA 德国世家 半透明散粉 12g #00-translucent  Dr. Hauschka",
          Enname: " Loose Powder #00-translucent  Dr. Hauschka 12 g",
          ml: " 12"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/3/1350-43718_11_1.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "31.50",
          chname: " DR.HAUSCHKA 德国世家 修容粉 10g #01-bronze Dr. Hauschka",
          Enname: " Bronzing Powder #01-bronze Dr. Hauschka 10 g",
          ml: " 10"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/3/1350-43794_11_1.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "17.92",
          chname: " DR.HAUSCHKA 德国世家  双头眼线笔 1.05g #01-black",
          Enname: " Eye Definer #01-black 1 05 Gr 1 05 g",
          color: " 01 Black"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/1/118081_31.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "6.89",
          chname: " Real Techniques SINGLE POCKET expert organizer #pink",
          Enname: " SINGLE POCKET expert organizer #pink",
          color: " #Pink"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/1/118080_31.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "6.89",
          chname: " Real Techniques SINGLE POCKET expert organizer #grey",
          Enname: " SINGLE POCKET expert organizer #grey",
          color: " #grey"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/1/118082_31.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "13.03",
          chname: " Real Techniques 3 POCKET expert organizer #pink",
          Enname: " 3 POCKET expert organizer #pink",
          color: " #Pink"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/1/118083_31.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "15.25",
          chname: " Real Techniques 3 POCKET expert organizer #grey",
          Enname: " 3 POCKET expert organizer #grey",
          color: " #grey"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/3/1388-50909_4_2.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "12.54",
          chname: " ST.MORIZ Professional Fast Tanning Mousse St. Moriz 200 ml",
          Enname: " Professional Fast Tanning Mousse St. Moriz 200 ml",
          ml: " 200"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/3/1388-51722_17_2.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "20.87",
          chname: " ST.MORIZ Advanced Pro Formula Ultra Finish With Applicator",
          Enname: " Advanced Pro Formula Ultra Finish With Applicator ",
          ml: " 100"
        },
        {
          img:
            "https://pb-assets.azoyacdn.com/media/catalog/product/1/3/1388-50183_17_2.jpg?imageMogr2/thumbnail/800x800/extent/800x800/background/d2hpdGU=",
          price: "10.12",
          chname:
            " ST.MORIZ Professional Self Tanning Lotion #dark St. Moriz 2",
          Enname: " Professional Self Tanning Lotion #dark St. Moriz 2",
          ml: " 250"
        }
      ],
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