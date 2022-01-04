<!--
 * @Date: 2022-01-04 22:14:21
 * @LastEditTime: 2022-01-04 23:09:40
 * @Description: file content
 * @FilePath: /vue3_ts/src/views/login/index.vue
-->
<template>
  <div class="login container">
    <div class="login-wrapper">
      <t-input placeholder="账号"></t-input>
      <t-input placeholder="密码"></t-input>
      <t-button>登录</t-button>
    </div>

    <div class="right-wrapper">
      <p>这是一个测试网站</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login',
  setup() {
    console.log(1);
  },
})
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-image: url('~@/assets/image/login_bg.jpg');
  background-size: 100% auto;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-wrapper {
    width: 360px;
    height: 500px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    overflow: hidden;
    margin-right: 60px;
    box-sizing: border-box;
    padding: 30px 30px;
  }
  .right-wrapper {
    width: 800px;
    height: 500px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    box-sizing: border-box;
    padding: 30px 30px;
  }
}
</style>
