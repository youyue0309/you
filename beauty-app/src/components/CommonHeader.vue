<template>
  <div id="header">
    <span class="search iconfont">&#xe626;</span>
    <span class="title">首页</span>
    <span class="buycar iconfont">&#xe602;</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 1rem;
  background:rgba(255,192,203,1.0);
  position: fixed;
  top: 0;
  line-height: 1rem;
  text-align: center;
  .iconfont{
      color: #fff;
      font-size: 21px;
  }
  .search{
      float: left;
      margin-left:0.2rem;
  }
  .buycar{
      float: right;
      margin-right:0.2rem;
  }
  .title{
      font-size: 18px;
      font-weight: 700;
      color:#fff;
  }
}
</style>
