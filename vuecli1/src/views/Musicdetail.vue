u<template>
    <div>
        <aplayer autoplay
            :music="musicList[0]"
            :list="musicList"
            :showLrc="true"
            v-if="isshow"
        />
    </div>
</template>

<script>
import axios from 'axios';
import Aplayer from 'vue-aplayer';
    export default {
        data(){
            return{
                musicList:[],
                isshow:false
            }
        },
        created(){
            axios.get('./../data/musicdata.json?id='+this.$route.query.id)
            .then((res)=>{
                console.log(res);
                res.data.musicData.forEach((obj,index)=>{
                    let music = {
                        src:obj.src,
                        title:obj.title,
                        artist:obj.author,
                        pic:obj.musicImgSrc,
                        lrc:obj.lrc
                    }
                    this.musicList.push(music);
                })
                this.isshow=true;
            }).catch((res)=>{

            })
        },
        components:{
            Aplayer
        }
    }
</script>

<style lang="scss" scoped>

</style>