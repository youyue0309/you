<template>
  <div id="province">
    <div class="wrapper">
      <div class="header-title">
        <ul>
          <li
            @click="selectProvince(it.provinceId,it.provinceName,index)"
            :class="{active:active==index}"
            v-for="(it,index) in provinceList"
            :key="index"
          >{{it.provinceName}}</li>
        </ul>
      </div>
      <div class="search">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
          <el-button @click="searchProduct" class="btn" slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div id="main-shop">
        <ul>
          <li v-for="(it,index) in productList" :key="index">
            <img :src="it.img" />
            <div class="list title">
              <h2>{{it.product}}</h2>
              <h3>高度：{{it.high}}</h3>
              <h3>直径：{{it.r}}</h3>
            </div>
            <div class="list city">
              <span>城市：{{it.city}}</span>
            </div>
            <div class="list price">
              <h2>价格</h2>
              <span>{{it.price}}￥/棵</span>
            </div>
            <div class="list btn">
              <span @click="getDetail(it._id)">查看详情</span>
            </div>
          </li>
        </ul>
        <div id="none"></div>
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
      search: "",
      productList: [],
      provinceList: [],
      activeName: "first",
      active: 0,
      provinceId: 1,
      provinceName: "",
      start: 0,
      limit: 10,
      content: ""
    };
  },
  created() {
    // var tt = 0;
    // tt = (Math.random()*(20-1)+1).toFixed(2);
    // console.log(tt);
    var that = this;
    axios({
      url: url.getProvinceId
    })
      .then(res => {
        this.provinceList = res.data;
        this.selectProvince(this.provinceId, this.provinceName, this.active);
        // console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    window.onscroll = function() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollTop + windowHeight > scrollHeight) {
        // console.log("dao");
        that.load();
      }
    };
  },
  methods: {
    load() {
      setTimeout(() => {
        this.getProductList();
      }, 500);
    },
    selectProvince(provinceId, provinceName, index) {
      this.active = index;
      this.provinceId = provinceId;
      this.provinceName = provinceName;
      this.productList = [];
      this.content = "";

      this.getProductList();
    },
    getProductList() {
      axios({
        url: url.getProductsByProvince,
        method: "get",
        params: {
          provinceName: this.provinceName,
          start: this.productList.length,
          limit: this.limit
        }
      })
        .then(res => {
          // var oDiv = document.getElementById('main-shop');
          // console.log(res);
          if (res.data.length != 0) {
            this.productList = this.productList.concat(res.data);
          } else {
            // console.log("no more");
            var oDiv = document.getElementById("none");
            this.content = "没有更多商品啦~~~";
            oDiv.innerHTML = this.content;
            // var oDiv1 = document.createElement('div');
            // oDiv1.style.width = '1300px';
            // oDiv1.style.textAlign = 'center';
            // oDiv1.style.color = '#ccc';
            // this.content = '没有更多商品啦~~~'
            // oDiv1.innerHTML = this.content;
            // oDiv.appendChild(oDiv1);
          }
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id: id
        }
      });
    },
    searchProduct() {
      axios({
        url: url.searchProduct,
        method: "get",
        params: {
          search: this.search,
          start: this.start,
          limit: this.limit
        }
      })
        .then(res => {
          // console.log(res);
          this.productList = [];
          this.productList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
  }
};
</script>

<style lang="scss" scoped>
#province {
  .wrapper {
    width: 1300px;
    margin: 0 auto;
    .header-title {
      padding-top: 20px;
      border-bottom: 1px solid rgb(138, 204, 23);
      overflow: hidden;
      .active {
        color: green;
      }
      li {
        text-align: center;
        color: rgba(138, 204, 23, 1);
        float: left;
        height: 30px;
        padding: 10px 10px;
      }
      li:hover {
        cursor: pointer;
        text-decoration-line: underline;
      }
    }
    .search {
      position: relative;
      height: 50px;
      padding-bottom: 20px;
      .input-with-select {
        position: absolute;
        top: 15px;
        right: 30px;
        border: 1px solid yellowgreen;
        width: 400px;
        float: right;
        .btn {
          background-color: yellowgreen;
          color: green;
        }
      }
    }
    #main-shop {
      #none {
        text-align: center;
        color: #ccc;
        width: 1300px;
      }
      li {
        width: 1300px;
        height: 180px;
        background-color: #f8f8f8;
        margin-top: 10px;
        img {
          float: left;
          width: 270px;
          height: 170px;
          padding: 5px;
        }
        .list {
          float: left;
          text-align: center;
          // line-height: 200px;
          width: 255px;
          height: 180px;
        }
        .title {
          h2 {
            margin-top: 40px;
          }
        }
        .price {
          // line-height: 180px;
          color: #f6580e;
          font-size: 20px;
          h2 {
            margin-top: 45px;
          }
        }
        .city {
          line-height: 180px;
          font-size: 20px;
        }
        .btn {
          line-height: 180px;
        }
      }
    }
  }
}
</style>