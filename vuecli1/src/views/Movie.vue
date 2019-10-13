<template>
  <div>
    <ul class="movie">
      <li class="movie-list" v-for="(obj,index) in movieList" :key="index" @click="getDetail(obj.id)">
        <img :src="obj.images.medium" alt />
        <div>
          <h2>{{obj.original_title}}</h2>
          <p>{{obj.collect_count}}已收藏</p>
          <!-- {{obj.casts}} -->
          <p>
            演员:<span v-for="(cast,index) in obj.casts" :key="index">{{cast.name}} </span>
          </p>
          <p>上映时间：{{obj.year}}</p>
        </div>
      </li>
    </ul>
    <img v-show="isshow" class="loading" src="@/assets/images/loading.gif" alt />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movieList: [],
      isshow:false,
      flag:true
    };
  },
  created() {
    this.getMovieList(this.movieList.length);
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      let scrollHeight = document.documentElement.clientHeight;
      let windowHeight = document.documentElement.scrollHeight;
      //console.log(scrollHeight, scrollTop, windowHeight);
      if (Math.abs(windowHeight-scrollTop - scrollHeight)<=1) {
        this.getMovieList(this.movieList.length);
      }
    };
  },
  methods:{
    getMovieList(num){
      this.isshow=true;
      if(this.flag){
        this.flag=false;
        axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start='+num+'&count=10')
        .then(res => {
          //console.log(res.data);
          this.movieList = [...this.movieList,...res.data.subjects];
          this.isshow=false;
          this.flag=true;
        })
        .catch(res => {
          console.log(res);
        });  
      }
      
    },
    getDetail(id){
      this.$router.push({
        path:"/movie/moviedetail",
        query:{id}
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.movie {
  padding: 0.1rem;
  .movie-list {
    height: 3.5rem;
    //background: yellow;
    border-bottom: 1px solid #000;
    display: flex;
    img {
      width: 2.5rem;
      margin-right: 0.2rem;
    }
    .movie-title {
      //text-align: center;
      margin-top: 0.1rem;
      margin-bottom: 0.2rem;
    }
  }
}
.loading {
  width: 1rem;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>