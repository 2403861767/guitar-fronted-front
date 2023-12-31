import { createApp } from 'vue'
import './assets/global.css'
import App from './App.vue'
import router from "./router";
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/icons/iconfont.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 5. 创建并挂载根实例
const app = createApp(App)
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)
app.use(Antd)
app.use(ElementPlus)
// 引入icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
