<template>
  <div id="app">
    <div id="main">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    
    <router-view name="common-footer"></router-view>
  </div>
</template>

<script>
// import CommonFooter from './components/CommonFooter.vue';

export default {
  // components: {
  //   CommonFooter,
  // },
};
</script>


<style lang="scss">
#main {
  margin-bottom: 1.1rem;
}
</style>
