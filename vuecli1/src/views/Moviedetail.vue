<template>
  <div class="moviedetail-box">
    <div class="movie-top" >
      <img :src="movieDetail.images.small" />
      <div class="movie-ab">
        <p>{{$route.query.id}}</p>
        <h2>{{movieDetail.title}}</h2>
        <p>上映时间：{{movieDetail.year}}</p>
        <p>类型：<span v-for="(obj,index) in movieDetail.genres" :key="index">{{obj}} </span></p>
      </div>
    </div>
    
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
.moviedetail-box{
  padding:0 0.1rem;
  .movie-top{
    margin-bottom: 0.1rem;
    display: flex;
    img{
      width: 4rem;
      margin-right: 0.1rem;
    }
    .movie-ab{
      margin-top: 0.1rem;
    }
  }
}

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