<template>
  <div id="user">
    <div class="main">
      <ul>
        <li class="title">
          <div class="title-name">
            <span class="text">用户名</span>
          </div>
          <div class="title-date">
            <span class="text">创建日期</span>
          </div>
          <div class="title-address">
            <span class="text">地址</span>
          </div>
          <div class="title-make">
            <span class="text">操作</span>
          </div>
        </li>
        <li v-for="(it,index) in userList" :key="index" class="table">
          <div class="title-name">
            <span class="text">{{it.userName}}</span>
          </div>
          <div class="title-date">
            <span class="text">{{it.createDate}}</span>
          </div>
          <div class="title-address">
            <span class="text">{{it.address}}</span>
          </div>
          <div class="title-make">
            <button @click="deleteUser(it._id,index)" class="btn">删除</button>
          </div>
        </li>
      </ul>
      <div class="page">
        <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/servie.config.js";
export default {
  data() {
    return {
      userList: [],
      start: 0,
      limit: 10
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    getUserList() {
      axios({
        url: url.getUserList,
        method: "get",
        params: {
          start: this.start,
          limit: this.limit
        }
      })
        .then(res => {
          // console.log(res);
          this.userList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteUser(id, index) {
      axios({
        url: url.deleteUser,
        method: "post",
        params: {
          id: id
        }
      })
        .then(res => {
          this.getUserList();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#user {
  .main {
    margin: 20px auto;
    width: 1000px;
    .title {
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      height: 40px;
      width: 100%;
      background-color: #f8f8f8;
      div {
        height: 40px;
        float: left;
        line-height: 40px;
        border-right: 1px solid #eee;
        .text {
          padding-left: 20px;
        }
      }
      .title-name {
        width: 180px;
        border-left: 1px solid #eee;
      }
      .title-date {
        width: 250px;
      }
      .title-address {
        width: 320px;
      }
      .title-make {
        text-align: center;
        width: 245px;
      }
    }
    .table {
      height: 40px;
      width: 100%;
      // background-color: #fafafa;
      border-bottom: 1px solid #eee;
      div {
        height: 40px;
        float: left;
        line-height: 40px;
        border-right: 1px solid #eee;
        .text {
          padding-left: 20px;
        }
      }
      .title-name {
        width: 180px;
        border-left: 1px solid #eee;
      }
      .title-date {
        width: 250px;
      }
      .title-address {
        width: 320px;
      }
      .title-make {
        text-align: center;
        line-height: 40px;
        width: 245px;
        .btn {
          width: 85px;
          border-radius: 7%;
          background-color: red;
          color: white;
          height: 34px;
        }
      }
    }
    .page {
      padding: 40px;
      text-align: center;
    }
  }
}
</style>