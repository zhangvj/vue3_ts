/*
 * @Date: 2022-01-04 21:37:13
 * @LastEditTime: 2022-01-04 22:32:00
 * @Description: file content
 * @FilePath: /vue3_ts/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TDesign from 'tdesign-vue-next'

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';
import './assets/style/common.css'

createApp(App).use(store).use(router).use(TDesign).mount('#app')
