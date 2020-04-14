<template>
  <div id="shop">
    <div class="wrapper">
      <div class="main">
        <el-row>
          <el-col :span="5">
            <div class="left-nav">
              <ul>
                <li class="title">专区</li>
                <li>护肤养肤</li>
                <li>彩妆专区</li>
                <li>香水专区</li>
                <li>基础清洁</li>
                <li>男士专区</li>
                <li>底妆专区</li>
                <li>专业工具</li>
              </ul>
            </div>
          </el-col>
          <el-col :span="19">
            <div class="shop-bigbox">
              <div v-for="(it,index) in 6" :key="index" class="card">
                <img src="../assets/image/lunbo/6.jpg" alt />
                <div class="name">
                  <span>name</span>
                </div>
                <div class="price">
                  <span>price￥</span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="bottom">
        <ul>
          <li>
            <i class="el-icon-truck"></i>
            <div class="text">
              <span>免费配送</span>
            </div>
            <div class="text">
              <span>所有订单均享免费顺丰速递</span>
            </div>
          </li>
          <li>
            <i class="el-icon-refresh-left"></i>
            <div class="text">
              <span>7天无理由退货</span>
            </div>
            <div class="text">
              <span>非定制商品订单自签收日起7天内可享无理由退货</span>
            </div>
          </li>
          <li>
            <i class="el-icon-shopping-bag-1"></i>
            <div class="text">
              <span>艺术包装</span>
            </div>
            <div class="text">
              <span>您的订单将尊享艺术包装并随附个性化定制祝福</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#shop {
  .wrapper {
    width: 1300px;
    margin: 0 auto;
    .main {
      padding: 0 0 15px 0;
      .left-nav {
        margin-top: 15px;
        background-color: rgba($color: black, $alpha: 0.7);
        height: 785px;
        li {
          // padding-bottom: 2px;
          text-align: center;
          line-height: 70px;
          height: 70px;
          color: white;
          letter-spacing: 15px;
          font-size: 18px;
        }
        .title {
          font-size: 18px;
          font-weight: bolder;
        }
      }
      .shop-bigbox {
        .card {
          float: left;
          margin: 20px;
          width: 300px;
          height: 360px;
          // border: 1px solid #ccc;
          border-radius: 2%;
          background-color: #f8f8f8;
          box-shadow: 10px 10px 5px #ccc;
          img {
            width: 280px;
            height: 280px;
            padding: 10px;
          }
          .name {
            text-align: center;
            height: 20px;
          }
          .price {
            text-align: center;
          }
        }
      }
    }
    .bottom {
      height: 220px;
      background-color: black;
      color: white;
      text-align: center;
      ul {
        margin: 0 auto;
        padding: 35px 0;
        width: 780px;
        li {
          width: 200px;
          height: 150px;
          // line-height: 200px;
          text-align: center;
          float: left;
          margin: 0 30px;
          i {
            font-size: 35px;
            font-weight: 400;
            padding-bottom: 5px;
          }
          .text {
            padding: 5px 0;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>