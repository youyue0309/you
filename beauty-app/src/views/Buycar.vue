<template>
  <div>
    <van-nav-bar title="购物车"></van-nav-bar>
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
          <van-button size="mini">删除</van-button>
        </div>
      </van-card>
    </div>
    <van-submit-bar class="submit" :price="allprice" button-text="提交订单" @submit="onSubmit" />
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
      allprice: 0
    };
  },
  computed: {
    ...mapState(["userInfo"])
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
          addPrice();
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  methods: {
    onSubmit() {},
    addPrice() {
      for (let item of this.productList) {
        this.allprice += item.price;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.submit {
  position: absolute;
  bottom: 1.1rem;
}
</style>
