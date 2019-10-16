<template>
    <div>
        <ul class="musiclist">
            <li v-for="(obj,index) in musicList" :key="index" @click="getDetail(obj.id)">
                <img :src="obj.bg" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return{
                musicList:[]
            }
        },
        created(){
            axios.get('./data/musiclist.json')
            .then((res)=>{
                //console.log(res);
                this.musicList=res.data.albums;
            }).catch((res)=>{
                alert('服务器错误');
            })
        },
        methods:{
            getDetail(id){
                this.$router.push({
                    path:"/music/musicdetail",
                    query:{id}
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.musiclist{
    display:flex;
    flex-wrap: wrap;
    li{
        width: 50%;
        img{
            display:block;
            width: 100%;
        }
    }
}
</style>