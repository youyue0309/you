<template>
    <div id="footer" :style="{background:$store.state.color}">
        <router-link v-for="(obj,index) in menu" :key="index" @click.native="change({title:obj.title,color:obj.color})" :to="obj.path">{{obj.title}}</router-link>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        data(){
           return{
               menu:[
                   {
                       path:"/",
                       title:"电影",
                       color:"#ff0036"
                   },
                   {
                       path:"/picture",
                       title:"图片",
                       color:"#062f4f"
                   },
                   {
                       path:"/book",
                       title:"图书",
                       color:"#813772"
                   },
                   {
                       path:"/music",
                       title:"音乐",
                       color:"#3cc47c"
                   },
               ]
           }
        },
        methods:mapMutations(['change']),
        created(){
            this.menu.forEach((obj,index)=>{
                if (obj.path==this.$route.path){
                    this.change({title:obj.title,color:obj.color})
                }
            })
        }
        
    }
</script>

<style lang="scss" scoped>
    #footer{
        height: 1rem;
        width: 100%;
        background:#ff0036;
        position: fixed;
        bottom:0;
        left:0;
        display: flex;
        a{
            flex:1;
            text-align: center;
            line-height: 1rem;
            color:#000;
            &.router-link-exact-active{
                color:#fff;
            }
        }
    }
</style>