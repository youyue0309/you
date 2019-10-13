<!-- 总组件 -->
<template>
  <div id="app">
    <!-- <common-header></common-header> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <!-- <router-link to="/mine">我的 </router-link>| -->
      <!-- params传参 不能使用path直接传 需要使用name -->
      <router-link :to="{name:'mine',params:{id:666,name:'小王'}}">我的params </router-link>|
      <!-- query传参 -->
      <router-link :to="{path:'/mine',query:{id:666,name:'小王'}}">我的query </router-link>|
      <!-- 通过路径传参 -->
      <router-link to="/test/5/lisi">test</router-link> |
      <router-link to="/aaa">跳转aaa</router-link> |
      <router-link to="/c">跳转c </router-link>|

      <button @click="$router.push('/')"> 首页 </button>
       <button @click="$router.go(-1)"> 上一页 </button>
        <button @click="$router.go(1)"> 下一页 </button>
    </div>
    <transition name="fade">
       <router-view/>
    </transition>
  </div>
</template>


<script>
    // 1 引入  2components下声明
    import CommonHeader from './components/CommonHeader';
    export default {
        components:{
            CommonHeader
        },
        methods:{
          go(){
              // 
              this.$router.push('/');
          }
        }
    }
</script>

<style lang="scss">
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition:opacity 2s ease;
  }
  .fade-enter-to{
    opacity: 1;
  }
  .fade-leave{
    transform: translateX(0);
  }
  .fade-leave-active{
    transition: transform 1s ease;
  }
  .fade-leave-to{
    transform: translateX(100%);
  }
</style>
