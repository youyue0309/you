<template>
  <div>
    <img :src="movieDetail.images.small" />
    {{$route.query.id}}
    <ul>
      <li class="cast-list" v-for="(cast,index) in movieDetail.casts" :key="index">
        <img :src="cast.avatars?cast.avatars.small:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=320178652,790985626&fm=26&gp=0.jpg'" alt="">
        <p>{{cast.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movieDetail: {}
    };
  },
  created() {
    axios
      .get("./../data/moviedetail.json")
      .then(res => {
        this.movieDetail = res.data;
        console.log(this.movieDetail);
      })
      .catch(() => {});
  },
  methods: {
    /* getId(){
                console.log(this.movieDetail);
                   this.movieDetail.forEach((obj,index)=>{
                    console.log(this.$route.query.id);
                    if(this.$route.query.id==obj.id){
                        console.log("iii");
                        return obj.images.small;
                    }
                }) */
  }
};
</script>

<style lang="scss" scoped>
.cast-list {
  width: 1.8rem;
  float: left;
  img {
    width: 1.5rem;
    height: 1.7rem;
    border-radius: 50%;
  }
}
</style>