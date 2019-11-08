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
      <div class="goods-list-box">
        <div @mousedown="move($event)" id="goods-list">
          <ul>
            <li class="hot-goods">
              <img src="./../assets/images/goods.jpg" alt />
              <div class="goods-detail">李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品</div>
              <span class="price">￥36</span>
              <span class="pay">36人已付款</span>
            </li>
            <li class="hot-goods">
              <img src="./../assets/images/goods.jpg" alt />
              <div class="goods-detail">李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品</div>
              <span class="price">￥36</span>
              <span class="pay">36人已付款</span>
            </li>
            <li class="hot-goods">
              <img src="./../assets/images/goods.jpg" alt />
              <div class="goods-detail">李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品</div>
              <span class="price">￥36</span>
              <span class="pay">36人已付款</span>
            </li>
            <li class="hot-goods">
              <img src="./../assets/images/goods.jpg" alt />
              <div class="goods-detail">李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品</div>
              <span class="price">￥36</span>
              <span class="pay">36人已付款</span>
            </li>
            <li class="hot-goods">
              <img src="./../assets/images/goods.jpg" alt />
              <div class="goods-detail">李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品</div>
              <span class="price">￥36</span>
              <span class="pay">36人已付款</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="commend">
      <div class="commend-title">
        <span>推荐商品</span>
      </div>
      <div class="line"></div>
      <div class="commend-goods">
        <img src="./../assets/images/goods.jpg" alt />
        <div class="goods-detail">李医生芦荟胶补水保湿青春痘面霜男女面膜正品痘膏淡化痘印护肤品</div>
        <span class="price">￥36</span>
        <span class="pay">36人已付款</span>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';

export default {
  data() {
    return {
      leftX: 1,
    };
  },
  components: {
    Swipe,
    SwipeItem,
  },
  methods: {
    move(event) {
      console.log(event);
      const odiv = event.target;
      const disX = event.clientX - odiv.offsetLeft;
      console.log(odiv);
      document.onmousemove = (e) => {
        console.log(e);
        const left = e.clientX - disX;
        this.leftX = left / 50;
        odiv.style.left = `${this.leftX}rem`;
      };
      odiv.onmouseup = () => {
        document.onmousemove = null;
        // document.onmouseup = null;
      };
    },
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
    .goods-list-box{
      position: relative;
      width:100%;
      height: 3.9rem;
      overflow: hidden;
      // background: blanchedalmond;
      #goods-list {
        // background: #ff0036;
        position: absolute;
        left:0rem;
        width:13rem;
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
</style>
