<template>
  <div id="province">
    <div class="wrapper">
      <div class="header-title">
          <ul>
              <li v-for="(it,index) in provinceList" :key="index">{{it.name}}</li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    data() {
      return {
        provinceList: [
            {name:"北京"},
            {name:"天津"},
            {name:"上海"},
            {name:"浙江"},
            {name:"江苏"},
            {name:"辽宁"},
            {name:"湖北"},
            {name:"湖南"},
            {name:"河北"},
            {name:"河南"},
            {name:"山东"},
            {name:"山西"},
            {name:"内蒙古"},
            {name:"新疆"},
            {name:"青海"},
            {name:"吉林"},
            {name:"黑龙江"},
            {name:"安徽"},
            {name:"福建"},
            {name:"广东"},
            {name:"广西"},
            {name:"重庆"},
            {name:"陕西"},
            {name:"海南"},
            {name:"云南"},
            {name:"贵州"},
            {name:"甘肃"},
            {name:"台湾"},
            {name:"宁夏"},
            {name:"西藏"},
            {name:"香港"},
            {name:"澳门"},
            {name:"四川"},
        ],
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
};
</script>

<style lang="scss" scoped>
#province {
  .wrapper {
    width: 1300px;
    margin: 0 auto;
    .header-title{
        padding-top: 20px;
        border-bottom: 1px solid rgb(138, 204, 23);
        overflow: hidden;
        li{
            text-align: center;
            color: rgba(138, 204, 23, 1.0);
            float: left;
            height: 30px;
            padding: 10px 10px;
        }
        li:hover{
            cursor: pointer;
            text-decoration-line: underline;
        }
    }
  }
}
</style>