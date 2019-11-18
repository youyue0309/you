<template>
  <div id="find">
    <div class="menu">
      <ul>
        <li>护肤品</li>
        <li>美妆工具</li>
        <li>彩妆</li>
        <li>保健品</li>
        <li>个护品类</li>
        <li>洁面</li>
        <li>美容仪器</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#find{
  .menu{
    float: left;
    width: 2rem;
    height: 100vm;
    background: red;
    li{
      width: 2rem;
      height: 0.8rem;
      // border-bottom:1px solid #808080;
      background: #fff;
      text-align: center;
      line-height: 0.8rem;
      font-size: 17px;
      // font-weight: 600;
    }
  }
}
</style>
