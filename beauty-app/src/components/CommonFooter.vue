<template>
  <div id="footer">
      <router-link to="/">
        <span class="iconfont">&#xe665;</span>
        <br>
        <span class="menu">首页</span>
      </router-link>
      <router-link to="/find">
        <span class="type iconfont">&#xe69c;</span>
        <br>
        <span class="menu">分类</span>
      </router-link>
      <router-link to="/buycar">
        <span class="car iconfont">&#xe602;</span>
        <br>
        <span class="menu">购物车</span>
      </router-link>
      <router-link to="/mine">
        <span class="iconfont">&#xe690;</span>
        <br>
        <span class="menu">我的</span>
      </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer{
    width: 100%;
    height: 1.1rem;
    background:rgba(255,192,203,1.0);
    position:fixed;
    bottom:0;
    display: flex;
    a{
        margin-top: 0.12rem;
        flex: 1;
        // line-height: 1rem;
        text-align: center;
        .car{
            font-weight: 600;
        }
        .iconfont{
            font-size: 21px;
            color:#fff;
            // font-weight: 500;
        }
        .menu{
            color:#fff;
            font-size: 16px;
        }
        .type{
            font-size: 22px;
        }
        &.router-link-exact-active{
            .menu{
                color:#ff0036;
                font-size: 17px;
            }
            .iconfont{
                color:#ff0036;
                font-size: 23px;
            }
        }
    }
}
</style>
