<template>
  <div id="main">
    <swipe class="my-swipe">
      <swipe-item v-for="(obj,index) in swipeList" :key="index">
        <a href="#">
          <img :src="obj.path" alt />
        </a>
      </swipe-item>
    </swipe>
    <div class="hot">
      <div class="hot-title">
        <span class="hot-titled">热门商品</span>
      </div>
      <div class="line"></div>
      <swiper :options="swiperOption" id="goods-list">
        <swiper-slide v-for='(hot,index) in goodsList' :key="index" class="hot-goods">
          <img :src="hot.img" alt />
          <div class="goods-detail">{{hot.detail}}</div>
          <span class="price">￥{{hot.price}}</span>
          <span class="pay">{{hot.pay}}人已付款</span>
        </swiper-slide>
      </swiper>
    </div>
    <div class="commend">
      <div class="commend-title">
        <span>推荐商品</span>
      </div>
      <div class="line"></div>
      <div class="commend-goods">
        <ul>
          <a v-for="(obj,index) in goodsList" :key="index" href="#">
            <li>
              <img :src="obj.img" alt="">
              <div class="goods-detail">{{obj.detail}}</div>
              <span class="price">￥{{obj.price}}</span>
              <span class="pay">{{obj.pay}}人已付款</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css';
import 'swiper/dist/css/swiper.css';
import { Swipe, SwipeItem } from 'vue-swipe';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
      },
      hotList: [
        {
          img: require('./../assets/images/goods.jpg'),
          detail: '李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品',
          price: 76,
          pay: 556,
        },
        {
          img: require('./../assets/images/goods.jpg'),
          detail: '李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品',
          price: 76,
          pay: 556,
        },
        {
          img: require('./../assets/images/goods.jpg'),
          detail: '李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品',
          price: 76,
          pay: 556,
        },
        {
          img: require('./../assets/images/goods.jpg'),
          detail: '李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品',
          price: 76,
          pay: 556,
        },
        {
          img: require('./../assets/images/goods.jpg'),
          detail: '李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品',
          price: 76,
          pay: 556,
        },
      ],
      swipeList: [
        {
          path: require('./../assets/images/1.jpg'),
        },
        {
          path: require('./../assets/images/2.jpg'),
        },
        {
          path: require('./../assets/images/3.jpg'),
        },
        {
          path: require('./../assets/images/4.jpg'),
        },
        {
          path: require('./../assets/images/5.jpg'),
        },
        {
          path: require('./../assets/images/6.jpg'),
        },
        {
          path: require('./../assets/images/7.jpg'),
        },
      ],
      goodsList: [
        {
          img: require('./../assets/images/goods.jpg'),
          detail: '李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品',
          price: 36,
          pay: 35,
        },
        {
          img: require('./../assets/images/goods.jpg'),
          detail: '李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品',
          price: 36,
          pay: 35,
        },
        {
          img: require('./../assets/images/goods.jpg'),
          detail: '李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品',
          price: 36,
          pay: 35,
        },
        {
          img: require('./../assets/images/goods.jpg'),
          detail: '李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品',
          price: 36,
          pay: 35,
        },
        {
          img: require('./../assets/images/goods.jpg'),
          detail: '李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品',
          price: 36,
          pay: 311,
        },
      ],
    };
  },
  components: {
    Swipe,
    SwipeItem,
    swiper,
    swiperSlide,
  },
};
</script>

<style lang="scss" scoped>
#main {
  background: #f5f5f5;
  .my-swipe {
    width: 100%;
    height: 3rem;
    img {
      width: 100%;
      height: 3rem;
    }
  }
  .hot {
    overflow: hidden;
    margin-top: 0.3rem;
    width: 100%;
    height: 4.5rem;
    background: #fff;
    .hot-title {
      height: 0.6rem;
      font-size: 16px;
      font-weight: 700;
      position: relative;
      .hot-titled {
        position: absolute;
        left: 0.2rem;
        top: 0.1rem;
      }
    }
    .line {
      height: 2px;
      background: #f5f5f5;
    }
    #goods-list{
      text-align: center;
      height: 3.7rem;
      img{
        width: 2.25rem;
        height: 2.25rem;
        margin:0.2rem 0;
      }
      .goods-detail{
        color: #000;
        font-size: 14px;
        width: 2.25rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .price {
        position: absolute;
        bottom: 0.1rem;
        left: 0.1rem;
        font-size: 15px;
        color: #ff0036;
      }
      .pay {
        position: absolute;
        bottom: 0.1rem;
        right: 0.1rem;
        color: #808080;
        font-size: 13px;
      }
    }
  }
  .commend{
    margin-top: 0.1rem;
    background: #fff;
    .commend-title{
      // background: #ff0036;
      height: 0.7rem;
      text-align: center;
      line-height: 0.7rem;
      font-size: 16px;
      font-weight: 700;
    }
    .line{
      height: 2px;
      background: #f5f5f5;
    }
    .commend-goods{
      overflow: hidden;
      li{
        float: left;
        background: #fff;
        width: 50%;
        position: relative;
        text-align: center;
        height: 4.5rem;
        img{
          margin-top:0.2rem;
          width: 3rem;
          height: 3rem;
        }
        .goods-detail {
            color: #000;
            margin: 0.1rem 0.25rem;
            font-size: 16px;
            width: 3rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .price {
            position: absolute;
            bottom: 0.1rem;
            left: 0.25rem;
            font-size: 18px;
            color: #ff0036;
          }
          .pay {
            position: absolute;
            bottom: 0.1rem;
            right: 0.3rem;
            color: #808080;
            font-size: 16px;
          }
      }
    }
  }
}
</style>
