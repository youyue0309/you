<template>
  <div id="app">
    <common-header></common-header>
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CommonHeader from './components/CommonHeader.vue';

export default {
  components: {
    CommonHeader,
  }
}

</script>
<style lang="scss">
#app {
}
</style>
