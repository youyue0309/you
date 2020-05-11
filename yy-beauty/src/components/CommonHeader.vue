<template>
    <div id="header">
        <div class="wrapper">
            <span class="title">Beauty</span>
            <div class="left-title">
                <router-link to="/">首页</router-link>
                <router-link to="/shop">全部商品</router-link>
                <router-link to="/cart">购物车</router-link>
                <router-link to="/order">订单</router-link>
            </div>
            <div class="right-title">
                <router-link to="/login">{{JSON.stringify(userInfo) === '{}' ? '登录/注册' : userInfo.userName}}</router-link>
            </div>
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
    height: 55px;
    background-color: black;
    width: 100%;
    .wrapper{
        position: relative;
        margin: 0 auto;
        line-height: 55px;
        text-align: center;
        width: 1300px;
        height: 55px;
        // background: rgb(53, 39, 19);
        .title{
            color: white;
            font-size: 26px;
            font-family: "Century Gothic Std", Arial, sans-serif;
        }
        .left-title{
            position: absolute;
            top: 0;
            left: 33px;
            a{
                margin-right: 100px;
                font-size: 15px;
                float: left;
                color: white;
                &.router-link-exact-active{
                    font-size: 16px;
                    font-weight: bolder;
                }
            }
        }
        .right-title{
            position: absolute;
            right: 10px;
            top: 0;
            a{
                float: right;
                font-size: 15px;
                color: white;
                &.router-link-exact-active{
                    font-size: 16px;
                    font-weight: bolder;
                }
            }
        }
    }
}
</style>