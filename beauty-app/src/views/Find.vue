<template>
  <div>
    <van-nav-bar id="top" title="商品类型"></van-nav-bar>
    <div class="find">
      <van-row>
        <van-col span="6" class="nav">
          <ul>
            <li @click="selectCategory(item.typeId,index)" :class="{active:active==index}" v-for="(item,index) in types" :key=index>
              {{item.typeName}}
            </li>
          </ul>
        </van-col>
        <van-col span="18" class="container">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list @load="onLoad" v-model="isLoading" class="content" :finished="finished">
            <div class="content-item" v-for="(item, index) in productList" :key="index">
              <img :src="item.img" alt="">
              <p class="content-item-name">{{item.name}}</p>
              <p class="content-item-price">￥{{item.price}}</p>
            </div>
          </van-list>
          </van-pull-refresh>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import url from '@/servie.config.js';
export default {
  data(){
    return {
      types: [],//类型信息
      active: 0,
      productList: [],
      typeId: 1,//当前选中类型的id
      start: 0,
      limit: 10,
      finished: false,//是否数据加载完
      isLoading: false,
    }
  },
  created(){
    axios({
      url: url.getTypes
    }).then((res)=>{
      // console.log(res);
      this.types = res.data;
      this.selectCategory(this.typeId, this.active);
    }).catch((err)=>{
      console.log(err);
    });
  },
  methods: {
    selectCategory(typeId, index) {
      this.active = index;
      this.typeId = typeId;
      this.productList = [];
      this.finished = false;

      this.getProductList();
    },
    getProductList() {
      this.isLoading = true;
      axios({
        url: url.getProductsByType,
        method: "get",
        params: {
          typeId: this.typeId,
          start: this.productList.length,
          limit: this.limit
        }
      })
        .then(res => {
          //   console.log(res);
          if (res.data.length != 0) {
            this.productList = this.productList.concat(res.data);
          } else {
            this.finished = true;
          };
          this.isLoading = false;
        })
        .catch(err => {});
    },
    onLoad() {
      setTimeout(() => {
        this.getProductList();
      }, 2000);
    },
    onRefresh(){
      setTimeout(() => {
        this.productList = [];
        this.getProductList();
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav{
  background:rgba(255,192,203,0.5);
  li{
    height: 0.6rem;
    line-height: 0.6rem;
    border-bottom: 1px solid #fff;
    padding: 3px;
    text-align: center;
    color:#fff;
  }
  .active{
    background-color: #fff;
    color:rgb(255, 28, 66);
  }
}
.container{
  position: fixed;
  top: 46px;
  right:0;
  bottom:1.1rem;
  overflow-y: scroll;
}
.content{
  display: flex;
  flex-wrap:wrap; 
  padding-bottom: 1.1rem;
  &-item{
    width:40%;
    padding:0 10px;
    text-align: center;
    img {
      width: 2rem;
      height: 2rem;
    }
    &-name {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
#top{
  background:rgba(255,192,203,1.0);
}
.van-nav-bar__title{
  font-size:18px;
  color:#fff;
}
</style>
