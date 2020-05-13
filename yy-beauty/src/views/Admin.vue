<template>
  <div id="admin">
    <div class="header">
      <span class="header-title">Beauty美妆销售管理系统</span>
      <span @click="$router.push('/')" class="exit">退出系统</span>
    </div>
    <el-row class="main">
      <el-col class="main-left" :span="5">
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#f8f8f8">
          <el-menu-item @click="$router.push('/admin/user')" index="1">
            <i class="el-icon-user-solid"></i>
            <span>用户信息</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-goods"></i>
              <span>商品信息</span>
            </template>
            <el-menu-item index="2-1" @click="$router.push('/admin/shopmsg')">商品信息查询</el-menu-item>
            <el-submenu index="2-2">
              <template slot="title">商品信息应用</template>
              <el-menu-item index="2-2-1" @click="$router.push('/admin/update')">商品修改</el-menu-item>
              <el-menu-item @click="$router.push('/admin/addproduct')" index="2-2-2">商品添加</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item @click="$router.push('/admin/orderselect')" index="3">
            <i class="el-icon-s-order"></i>
            <span>订单信息</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="19">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    goto() {
      this.$router.push("/admin/");
    }
  }
};
</script>

<style lang="scss" scoped>
#admin {
  .header {
    height: 40px;
    width: 100%;
    background-color: black;
    line-height: 40px;
    color: white;
    .header-title {
      padding-left: 20px;
      font-size: 18px;
    }
    .exit{
      float: right;
      font-size: 14px;
      padding-right: 40px;
    }
  }
  .main {
    .main-left {
      .el-menu-vertical-demo {
        height: 100vh;
      }
    }
  }
}
</style>