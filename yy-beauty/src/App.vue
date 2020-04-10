<template>
  <div id="app">
    <common-header></common-header>
    <router-view/>
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

</style>
