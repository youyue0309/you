<template>
  <div id="order">
    <div class="wrapper">
      <div class="title">
        <span>提交订单</span>
      </div>
      <div class="bar"></div>
      <div class="address">
        <div class="title">
          <span>收货人信息：</span>
        </div>
        <div class="text">
          <span>地址：黑龙江</span>
        </div>
      </div>
      <div class="msg">
        <div class="title">
          <span>订单详情</span>
        </div>
        <div class="ordermsg">
          <img
            src="http://img.xbmiaomu.com/file/upload/201701/04/19-37-13-45-96885.jpg?x-oss-process=style/PC_sell-list.120x120"
            alt
          />
          <div class="price">
            <div class="num product">
              <span>商品价格：12.00</span>
              <span> x </span>
              <span> 1￥</span>
            </div>
            <div class="num yun">
              <span>运费：0.00￥</span>
            </div>

            <hr />
            <div class="num sum">
              <span>总价：12.00￥</span>
            </div>
          </div>
        </div>
      </div>
      <div class="submit">
        <button class="btn">提交订单</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#order {
  .wrapper {
    width: 1300px;
    margin: 10px auto;
    .title {
      font-size: 25px;
      font-weight: 700;
      padding: 20px;
    }
    .bar {
      width: 1300px;
      height: 10px;
      background-color: #63a71c;
      opacity: 0.5;
      margin: 15px 0;
    }
    .address {
      .text {
        padding: 20px;
      }
    }
    .msg {
      .ordermsg {
          position: relative;
        //   width: 1300px;
        img {
            // margin: 0 auto;
            margin-left: 50px;
          width: 100px;
          height: 100px;
        }
        .num{
            // margin-left: 50px;
            position: absolute;
            top: 0;
            right: 10px;
        }
        .sum{
            top: 125px;
        }
        .product{
            top: 50px;
        }
        .yun{
            top: 77px;
        }
      }
    }
    .submit{
        width: 1300px;
        padding-top: 20px;
        text-align: center;
        .btn{
            width: 100px;
            height: 40px;
            background-color: #63a71c;
            color: white;
        }
    }
  }
}
</style>