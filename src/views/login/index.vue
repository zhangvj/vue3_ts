<!--
 * @Date: 2022-01-04 22:14:21
 * @LastEditTime: 2022-01-06 23:18:06
 * @Description: file content
 * @FilePath: /vue3_ts/src/views/login/index.vue
-->
<template>
  <div class="login container">
    <div class="box">
      <div class="box-left">
        <img src="" alt="logo" class="logo" />
        <p class="login-tip">Sign in Travel</p>

        <div class="login-form">
          <div class="input-wrapper">
            <span class="tip">User</span>
            <t-input placeholder="账号"></t-input>
          </div>
          <div class="input-wrapper">
            <span class="tip">Password</span>
            <t-input placeholder="密码"></t-input>
          </div>
          <t-button class="login-btn" color="#6b86e6">登录</t-button>
        </div>
      </div>
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
    console.log(1)
  },
})
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  // background-image: url('~@/assets/image/login_bg.jpg');
  background: #e9ecf4;
  background-size: 100% auto;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  .box {
    width: 1000px;
    height: 600px;
    background: #f5f6fa;
    border-radius: 16px;
    &-left {
      width: 50%;
      box-sizing: border-box;
      padding: 30px;
      display: flex;
      flex-flow: column;
      align-items: center;
      .logo {
        width: 80px;
        height: 80px;
        border-radius: 8px;
        background: #e9ecf4;
        margin-top: 50px;
      }
      .login-tip {
        font-size: 14px;
        margin: 20px 0;
      }
      .input-wrapper {
        width: 300px;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        margin-top: 10px;
        .tip {
          font-size: 12px;
          color: #999999;
          padding: 10px 0;
        }
      }
      .login-btn {
        width: 300px;
        margin-top: 30px;
      }
    }
  }
  .right-wrapper {
    width: 50%;
    height: 100vh;
    background: rgba(47, 87, 233, 0.7);
    // backdrop-filter: blur(10px);
    box-sizing: border-box;
    padding: 30px 30px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
  }
}
</style>
