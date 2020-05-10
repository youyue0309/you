<template>
  <div id="order">
    <div class="main">
      <el-input placeholder="请输入订单号" v-model="search" class="input-with-select">
        <el-button @click="searchOrder" slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column prop="orderId" label="订单号" width="200"></el-table-column>
        <el-table-column prop="price" label="价格" width="180"></el-table-column>
        <el-table-column prop="userAddress" label="地址"></el-table-column>
        <el-table-column prop="createDate" label="时间" width="210"></el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">发货</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="btn">
        <i @click="prev" class="el-icon-arrow-left"></i>
        <span>{{sum}}</span>
        <i @click="next" class="el-icon-arrow-right"></i>
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
      issearch: false,
      sum: 1,
      tableData: [],
      search: "",
      start: 0,
      limit: 10
    };
  },
  created() {
    this.getOrderList();
  },
  methods: {
    prev() {
      if (this.start > 0) {
        this.start = this.start - 10;
        this.sum = Math.floor(this.start / 10) + 1;
        if (this.issearch) {
          this.searchOrder();
        } else {
          this.getOrderList();
        }
      }
    },
    next() {
      this.start = this.start + 10;
      this.sum = Math.floor(this.start / 10) + 1;
      if (this.issearch) {
        this.searchOrder();
      } else {
        this.getOrderList();
      }
    },
    searchOrder() {
      axios({
        url: url.searchOrder,
        method: "get",
        params: {
          search: this.search,
          start: this.start,
          limit: this.limit
        }
      })
        .then(res => {
          // console.log(res);
          this.sum = 1;
          this.tableData = [];
          this.tableData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getOrderList() {
      axios({
        url: url.getOrderList,
        method: "get",
        params: {
          start: this.start,
          limit: this.limit
        }
      })
        .then(res => {
          // console.log(res);
          this.tableData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleEdit(index, row) {
      this.$message({
        showClose: true,
        message: "提醒发货成功",
        type: "success",
        center: true
      });
      //   console.log(index,row)
    },
    handleDelete(index, row) {
      axios({
        url: url.delOrder,
        method: "post",
        params: {
          id: row._id
        }
      })
        .then(res => {
          this.getOrderList();
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#order {
  .main {
    .input-with-select {
      padding-bottom: 20px;
      width: 400px;
    }
    margin: 20px auto;
    width: 1000px;
    .btn {
      width: 100%;
      text-align: center;
      i {
        padding: 10px;
        font-size: 20px;
      }
    }
  }
}
</style>