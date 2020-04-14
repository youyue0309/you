<template>
    <div id="header">
        <div class="header-title">
            <span class="header-name">知树网</span>
            <router-link to="/">首页</router-link>
            <router-link to="/category">分类</router-link>
            <router-link to="/province">省份</router-link>
            <router-link to="/order">订单</router-link>
            <router-link to="/cart">购物车</router-link>
            <router-link to="/mine">我的</router-link>
            <span class="name">{{userInfo.userName}}</span>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
    export default {
        computed: {
            ...mapState(['userInfo'])
        }
        
    }
</script>

<style lang="scss" scoped>
#header{
    height: 60px;
    width: 100%;
    background: #63a71c;
    border-bottom: 1px solid #63a71c;
    .header-title{
        margin: 0 auto;
        // background: chocolate;
        width: 1280px;
        height: 60px;
        line-height: 60px;
        .header-name{
            float: left;
            // background: cornflowerblue;
            font-size: 35px;
            color: #fff;
            font-weight: 700;
            margin-right: 30px;
        }
        a{
            float: left;
            display: inline-block;
            width: 130px;
            // background: #63a71c;
            color: #fff;
            font-size: 20px;
            text-align: center;
            line-height: 60px;
            // border-left: 1px solid #fff;
            &.router-link-exact-active{
                color: #63a71c;
                background: #fff;
            }
        }
    }
    .name{
        float: right;
        margin-right: 20px;
        color: #fff;
        font-size: 20px;
    }
}
</style>