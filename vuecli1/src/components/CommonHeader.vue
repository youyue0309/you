<template>
    <div class="header" :style="{background:$store.state.color}">
        <span id="header-title">首页</span>
        <span id="header-top">{{$store.state.title}}</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .header{
        height: 1rem;
        width: 100%;
        background: #ff0036;
        line-height: 1rem;
        position: fixed;
        top:0;
        text-align: center;
    }
    #header-title{
        position: absolute;
        left:8px;
        color:#fff;
    }
    #header-top{
        color:#fff;
    }

</style>