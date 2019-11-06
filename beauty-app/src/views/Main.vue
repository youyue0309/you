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
            热门商品
        </div>
        <div class="hot-goods">
            <img src="./../assets/images/goods.jpg" alt="">
            <br>
            <span class="goods-detail">李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品</span>
            <br>
            <span>￥36</span>
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
  .hot{
      margin-top:0.3rem;
      width: 100%;
      height: 4.5rem;
      background: rgb(24, 146, 95);
      .hot-goods{
          width: 3rem;
          height: 4rem;
          background: #f5f5f5;
          .goods-detail{
                flex-direction: column;
                align-content: flex-start;
                flex-shrink: 0;
                font-size: 13px;
                width: 151px;
                height: 19px;
                line-height: 21px;
                color: rgb(51, 51, 51);
                overflow: hidden;
          }
          img{
              width: 2.5rem;
              height: 2.5rem;
          }
      }
  }
}
</style>
