import { createApp } from 'vue'
import './assets/global.css'
import App from './App.vue'
import router from "./router";
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
// 5. 创建并挂载根实例
const app = createApp(App)
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)
app.use(Antd)

app.mount('#app')
