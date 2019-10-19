<template>
    <v-touch v-on:swipeleft="next()"  v-if="show" class="picdel" :style="{'background-image':'url('+this.$store.state.photoList[$route.query.index].src+')'}">
        
    </v-touch>
</template>

<script>
    // import Vue from 'vue';
    // import VueTouch from 'vue-touch';
    // Vue.use(VueTouch, {name: 'v-touch'});
    export default {
        data(){
            return{
                index:this.$route.query.index,
                show:false
            }
        },
        created(){
            // console.log(this.$store.state.photoList);
        },
        beforeMount(){
            if(this.$store.state.photoList.length == 0){
                this.goPhoto();
            }else{
                this.show = true;
            }
        },
        methods:{
            goPhoto(event){
                this.$router.push('/photo');
                event.preventDefault();
            },
            next(){
                // 显示下一张图
                this.index++;
                if(this.index == this.$store.state.photoList.length){
                    this.index = 0;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.picdel{
    color:#fff;
    background: #000 url("http://localhost:8080/img/photo/1.jpg") no-repeat center center;
    background-size: contain;
    position:absolute;
    top:50px;
    bottom:0px;
    left:0px;
    right:0px;
}
</style>