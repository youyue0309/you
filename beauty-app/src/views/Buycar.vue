<template>
  <div>
    <van-nav-bar class="cart" title="购物车"></van-nav-bar>
    <div class="card">
      <van-card
        v-for="(item,index) in productList"
        :key="index"
        :price="item.price"
        :desc="item.company"
        :title="item.name"
        :thumb="item.img"
      >
        <div slot="footer">
          <van-button @click="delCart(item._id, index)" size="mini">删除</van-button>
        </div>
      </van-card>
    </div>
    <van-submit-bar class="submit" :price="totalPrice" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import url from "@/servie.config.js";
export default {
  data() {
    return {
      productList: [],
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    totalPrice(){
      return this.productList.reduce((sum, elem)=>{
        sum += elem.price;
        return sum;
      },0) * 10 * 10 ;
    }
  },
  created() {
    //验证用户是否登录
    if (JSON.stringify(this.userInfo) === "{}") {
      this.$toast.fail("请先登录");
      setTimeout(() => {
        this.$router.push("/mine");
      }, 1000);
    } else {
      axios({
        url: url.getCart,
        method: "get",
        params: {
          userId: this.userInfo._id
        }
      })
        .then(res => {
          for (let item of res.data) {
            this.productList.push(item.productId);
          }
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    onSubmit() {
      this.$toast.success('进入付款页');
    },
    delCart(id, index){
      //删除数据库中的数据 如果删除成功 进入回调函数中，在回调函数中
      axios({
        url: url.delCart,
        method: 'post',
        params: {
          id: id,
          userId: this.userInfo._id
        }
      }).then(res => {
        // console.log(res);
        this.productList.splice(index, 1);
      }).catch(err => {
        console.log(err);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cart{
  background:rgba(255,192,203,1.0);
}
.van-nav-bar__title{
  font-size:18px;
  color:#fff;
}
.submit {
  position: absolute;
  bottom: 1.1rem;
}
</style>
