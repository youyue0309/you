<template>
  <div id="main">
    <swipe class="my-swipe">
      <swipe-item>
        <a href="#">
          <img src="./../assets/images/1.jpg" alt />
        </a>
      </swipe-item>
      <swipe-item>
        <a href="#">
          <img src="./../assets/images/2.jpg" alt />
        </a>
      </swipe-item>
      <swipe-item>
        <a href="#">
          <img src="./../assets/images/3.jpg" alt />
        </a>
      </swipe-item>
      <swipe-item>
        <a href="#">
          <img src="./../assets/images/4.jpg" alt />
        </a>
      </swipe-item>
      <swipe-item>
        <a href="#">
          <img src="./../assets/images/5.jpg" alt />
        </a>
      </swipe-item>
      <swipe-item>
        <a href="#">
          <img src="./../assets/images/6.jpg" alt />
        </a>
      </swipe-item>
      <swipe-item>
        <a href="#">
          <img src="./../assets/images/7.jpg" alt />
        </a>
      </swipe-item>
    </swipe>
    <div class="hot">
      <div class="hot-title">
        <span class="hot-titled">热门商品</span>
      </div>
      <div class="line"></div>
      <div id="goods-list">
        <div class="hot-goods">
          <img src="./../assets/images/goods.jpg" alt />
          <div class="goods-detail">李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品</div>
          <span class="price">￥36</span>
          <span class="pay">36人已付款</span>
        </div>
        <div class="hot-goods">
          <img src="./../assets/images/goods.jpg" alt />
          <div class="goods-detail">李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品</div>
          <span class="price">￥36</span>
          <span class="pay">36人已付款</span>
        </div>
        <div class="hot-goods">
          <img src="./../assets/images/goods.jpg" alt />
          <div class="goods-detail">李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品</div>
          <span class="price">￥36</span>
          <span class="pay">36人已付款</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';

export default {
  components: {
    Swipe,
    SwipeItem,
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
    background: #fff000;
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
    #goods-list {
      width: 12.9rem;
      .hot-goods {
        float: left;
        margin-top: 0.1rem;
        margin-left: 0.1rem;
        position: relative;
        width: 2.5rem;
        height: 3.5rem;
        background: #f5f5f5;
        text-align: center;
        .goods-detail {
          margin: 0.1rem;
          font-size: 13px;
          width: 2.3rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .price {
          position: absolute;
          bottom: 0.1rem;
          left: 0.1rem;
          font-size: 14px;
          color: #ff0036;
        }
        .pay {
          position: absolute;
          bottom: 0.1rem;
          right: 0.1rem;
          color: #808080;
          font-size: 12px;
        }
        img {
          margin-top: 0.1rem;
          width: 2.3rem;
          height: 2.3rem;
        }
      }
    }
  }
}
</style>
