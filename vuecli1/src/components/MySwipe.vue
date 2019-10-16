<template>
    <div class="swipe-box">
        <transition-group name="fade" tag="ul">
            <li v-for="(obj,index) in imgList" :key="index" class="booklist" v-show="index==nowIndex">
                <img :src=obj alt="">
            </li>
        </transition-group>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                nowIndex:0,
                /* imgList:[
                    "/img/photo/1.jpg",
                    "/img/photo/2.jpg",
                    "/img/photo/3.jpg"
                ] */
            }
        },
        props:['imgList','mode','speed'],
        created(){
            setInterval(()=>{
                this.nowIndex++;
                if(this.nowIndex==this.imgList.length){
                    this.nowIndex=0;
                }
            },5000)
        }
    }
</script>

<style lang="scss" scoped>
.swipe-box{
    position: relative;
    .booklist{
        width: 100%;
        position: absolute;
        left:0;
        top:0;
        img{
            height: 250px;
            width: 100%;
        }
    }
    .slide-enter{
      transform: translateX(-100%);
  }
  .slide-enter-active{
      transition: transform 1s linear ;
  }
  .slide-enter-to{
      transform: translateX(0%);
  }
  .slide-leave{
      transform: translateX(0%);
  }
  .slide-leave-active{
      transition: transform 1s linear ;
  }
  .slide-leave-to{
      transform: translateX(100%);
  }
  .fade-enter{
      opacity: 0;
  }
  .fade-enter-active{
      transition: opacity 1s linear ;
  }
  .fade-enter-to{
      opacity: 1;
  }
  .fade-leave{
      opacity: 1;
  }
  .fade-leave-active{
      transition: opacity 1s linear ;
  }
  .fade-leave-to{
      opacity: 0;
  }


}

</style>