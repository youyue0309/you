<template>
  <div id="mine">
    <div class="wrapper">
      <div class="means">
        <div class="title">
          <span>个人资料</span>
        </div>
        <div class="bar"></div>
        <div class="text">
          <div class="name">
            <span>用户名：{{detail.userName}}</span>
          </div>
          <div class="address">
            <span>地址：{{detail.address}}</span>
          </div>
          <el-input placeholder="请输入地址" v-model="address" class="input-with-select"></el-input>
          <div class="btn">
            <button @click="updatepassword(detail._id)" class="buy">修改密码</button>
            <button @click="updateaddress" class="addcart">修改地址</button>
          </div>
        </div>
      </div>
      <div class="order">
        <div class="title">
          <span>订单信息</span>
        </div>
        <div class="bar"></div>
        <div class="text">
          <div v-for="(it,index) in orderList" :key="index" class="order">
            <img :src="proImg[index]" alt />
            <div class="shopname">
              <span>{{proName[index]}}</span>
            </div>
            <div class="date">
              <span>{{it.createDate}}</span>
            </div>
            <div class="price">
              <span>{{it.price}}￥</span>
            </div>
            <div class="del">
              <button @click="delOrder(it._id,index)">删除</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import url from "@/servie.config.js";
export default {
  data() {
    return {
      detail: {},
      address: "",
      orderList: [],
      proId: "",
      proImg: [],
      proName: []
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created() {
    if (JSON.stringify(this.userInfo) === "{}") {
      alert("请先登录");
      setTimeout(() => {
        this.$router.push("/");
      }, 1000);
    } else {
      this.get();
      this.getOrder();
    }
  },
  methods: {
    get() {
      axios({
        url: url.getuserDetail,
        method: "get",
        params: {
          username: this.userInfo.userName
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
    getOrder() {
      axios({
        url: url.getOrder,
        method: "get",
        params: {
          userId: this.userInfo._id
        }
      })
        .then(res => {
          this.orderList = res.data;
          for (var i = 0; i < this.orderList.length; i++) {
            this.proId = res.data[i].productId[0];
            axios({
              url: url.getDetail,
              method: "get",
              params: {
                id: this.proId
              }
            })
              .then(res => {
                this.proImg.push(res.data.img);
                this.proName.push(res.data.product);
              })
              .catch(err => {
                console.log(err);
              });
          }
          // console.log(this.proId);
        })
        .catch(err => {
          console.log(err);
        });
    },
    updatepassword(id) {
      if (JSON.stringify(this.userInfo) === "{}") {
        alert("请先登录");
        setTimeout(() => {
          this.$router.push("/");
        }, 1000);
      } else {
        this.$router.push({
          path: "/password",
          query: {
            id: id
          }
        });
      }
    },
    updateaddress() {
      axios({
        url: url.updateAddress,
        method: "get",
        params: {
          id: this.detail._id,
          address: this.address
        }
      })
        .then(res => {
          // console.log(res);
          alert("修改成功");
          this.address = "";
          this.get();
        })
        .catch(err => {
          console.log(err);
        });
    },
    delOrder(id, index) {
      //删除数据库中的数据 如果删除成功 进入回调函数中，在回调函数中
      axios({
        url: url.delOrder,
        method: "post",
        params: {
          id: id
        }
      })
        .then(res => {
          // console.log(res);
          this.orderList.splice(index, 1);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#mine {
  .wrapper {
    width: 1300px;
    margin: 15px auto;
    .means {
      .title {
        font-size: 25px;
        font-weight: 700;
        padding: 0 20px;
      }
      .bar {
        width: 1300px;
        height: 30px;
        background-color: #63a71c;
        opacity: 0.5;
        margin: 15px 0;
      }
      .text {
        div {
          padding: 10px;
        }
        .input-with-select {
          width: 200px;
        }
        .btn {
          padding: 20px 0;
          width: 300px;
          text-align: center;
          .buy {
            width: 100px;
            background: rgb(138, 204, 23);
            color: white;
            height: 30px;
            margin-right: 60px;
          }
          .addcart {
            width: 100px;
            border: 1px solid rgb(138, 204, 23);
            color: rgb(138, 204, 23);
            height: 30px;
          }
        }
      }
    }
    .order {
      .title {
        font-size: 25px;
        font-weight: 700;
        padding: 0 20px;
      }
      .bar {
        width: 1300px;
        height: 30px;
        background-color: #63a71c;
        opacity: 0.5;
        margin: 15px 0;
      }
      .text {
        .order {
          position: relative;
          width: 1300px;
          margin-top: 10px;
          height: 100px;
          background: #f8f8f8;
          img {
            width: 200px;
            height: 90px;
            padding: 5px;
          }
          .shopname {
            font-size: 25px;
            font-weight: 700;
            position: absolute;
            bottom: 35px;
            left: 250px;
          }
          .price {
            position: absolute;
            bottom: 40px;
            right: 200px;
          }
          .date {
            position: absolute;
            bottom: 40px;
            left: 600px;
          }
          .del {
            position: absolute;
            bottom: 35px;
            right: 20px;
            button {
              width: 100px;
              height: 30px;
              background: #63a71c;
              color: white;
            }
          }
        }
      }
    }
  }
}
</style>