<template>
  <div id="mine">
    <van-tabs class="tab" size="large" title-active-color="#ee0a24">
      <van-tab title="登录">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="loginUsername"></van-field>
          <van-field label="密码" type="password" required clearable placeholder="请输入密码" v-model="loginPassword"></van-field>
        </van-cell-group>
        <div>
          <van-button class="login-btn" type="primary" size="large">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="registUsername"></van-field>
          <van-field label="密码" type="password" required clearable placeholder="请输入密码" v-model="registPassword"></van-field>
        </van-cell-group>
        <div>
          <van-button class="login-btn" type="primary" size="large">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginUsername: "",
      loginPassword: "",
      registUsername: "",
      registPassword: ""
    };
  }
};
</script>

<style lang="scss" scoped>
#mine {
  .login-btn {
    margin-top: 0.3rem;
  }
}
</style>
