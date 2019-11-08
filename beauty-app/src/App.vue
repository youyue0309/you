<template>
  <div id="app">
    <common-header></common-header>
    <div id="main">
      <router-view />
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader.vue';
import CommonFooter from './components/CommonFooter.vue';

export default {
  components: {
    CommonHeader,
    CommonFooter,
  },
};
</script>


<style lang="scss">
#main{
  margin:1rem 0;
}
</style>
