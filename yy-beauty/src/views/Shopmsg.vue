<template>
  <div id="shop">
    <div class="main">
      <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
        <el-button @click="searchProduct" slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column prop="chname" label="名称" width="230"></el-table-column>
        <el-table-column prop="price" label="价格" width="180"></el-table-column>
        <el-table-column prop="color" label="色号"></el-table-column>
        <el-table-column prop="ml" label="容量" width="180"></el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
      tableData: [],
      search: "",
      start: 0,
      limit: 10,
      sum: 1
    };
  },
  created() {
    this.getProductList();
  },
  methods: {
    prev() {
      if (this.start > 0) {
        this.start = this.start - 10;
        this.sum = Math.floor(this.start / 10) + 1;
        if (this.issearch) {
          this.searchProduct();
        } else {
          this.getProductList();
        }
      }
    },
    next() {
      this.start = this.start + 10;
      this.sum = Math.floor(this.start / 10) + 1;
      if (this.issearch) {
        this.searchProduct();
      } else {
        this.getProductList();
      }
    },
    searchProduct() {
      axios({
        url: url.searchProduct,
        method: "get",
        params: {
          search: this.search,
          start: this.start,
          limit: this.limit
        }
      })
        .then(res => {
          // console.log(res);
          this.tableData = [];
          this.tableData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getProductList() {
      axios({
        url: url.getProductList,
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
      this.$router.push({
        path: '/admin/update',
        query: {
          res: row
        }
      });

    },
    handleDelete(index, row) {
      axios({
        url: url.delProduct,
        method: "post",
        params: {
          id: row._id
        }
      })
        .then(res => {
          this.getProductList();
          // console.log(res)
        })
        .catch(err => {
          console.log(err);
        });
      console.log(index, row);
    }
  }
};
</script>

<style lang="scss" scoped>
#shop {
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