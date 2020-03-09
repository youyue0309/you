<template>
    <div>
        <h1>404 页面走丢了。。。</h1>
        <van-button type="primary" size="small" @click="back">回到首页</van-button>
    </div>
</template>

<script>
    export default {
        methods: {
            back(){
                this.$router.push('/');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>