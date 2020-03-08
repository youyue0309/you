<template>
  <div>
    <van-nav-bar title="商品详情" left-text="返回" @click-left="$router.go(-1)"></van-nav-bar>
    <img class="detail-img" :src="detail.img" alt />
    <div class="detail">
        <p class="detail-price">￥{{detail.price}}</p>
      <p class="detail-name">{{detail.name}}</p>
      <p class="detail-company">公司：{{detail.company}}</p>
      <p class="detail-city">产地：{{detail.city}}</p>
    </div>
    <div class="toolbar">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车"/>
        <van-goods-action-button type="warning" text="加入购物车" @click="addCart"/>
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/servie.config.js";
import { mapState } from 'vuex';
export default {
  data() {
    return {
      detail: {}
    };
  },
  created() {
    // console.log(this.$route.params.id);
    axios({
      url: url.getDetail,
      method: "get",
      params: {
        id: this.$route.params.id
      }
    })
      .then(res => {
        // console.log(res);
        this.detail = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
      ...mapState(['userInfo'])
  },
  methods: {
      addCart(){
          //检查用户是否登录 前端vuex保存登录状态
          //如果后端保存登录状态 koa-session redis
          if(JSON.stringify(this.userInfo) === '{}'){
              this.$toast.fail('请先登录');
              setTimeout(()=>{
                  this.$router.push('/mine');
              },1000)
          }else{
              //插入购物车
              axios({
                  url: url.addCart,
                  method: 'post',
                  data: {
                      productId: this.detail._id,
                      userId: this.userInfo._id
                  }
              }).then((res)=>{
                //   console.log(res);
                  if(res.data.code == 200){
                      this.$toast.success(res.data.message);
                  }
              }).catch((err)=>{
                  console.log(err);
              });
          }
      }
  }
};
</script>

<style lang="scss" scoped>
.detail {
//   text-align: center;
  padding: 0.2rem;
  &-img {
    width: 100%;
    height: 6rem;
  }
  &-name {
    color: #333;
    font-weight: bolder;
    margin-bottom: 0.3rem;
    font-size:21px;
  }
  &-price {
    color: #ff7300;
    font-size: 22px;
    font-weight: bolder;
  }
}
</style>