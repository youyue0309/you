<template>
    <div class="pic-box">
        <img class="pic" v-for="(photo,index) in pictureList" :key='index' :src="photo.src" alt="" @click="goDetail(index)">
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    import axios from 'axios';
    export default {
        data(){
            return{
                pictureList:[]
            }
        },
        created(){
            axios.get('./data/photodata.json')
            .then((res)=>{
                // console.log(res);
                this.pictureList=res.data.photoData;
                this.addPhoto(res.data.photoData);
                // console.log(this.$store.state.photoList);
            })
        },
        methods:{
            ...mapMutations(['addPhoto']),
            goDetail(index){
                this.$router.push({
                    path:'/picture/picturedetail',
                    query:{index}
                    });
            },
        }
    }
</script>

<style lang="scss" scoped>
.pic-box{
    overflow: hidden;
    .pic{
        width: 50%;
        float: left;
    }
}
</style>