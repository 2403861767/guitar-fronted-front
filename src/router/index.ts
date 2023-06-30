import {createRouter, createWebHashHistory} from "vue-router";
import Index from "../views/Index.vue";
import BaseLayout from "../layouts/BaseLayout.vue"
// 2. 定义一些路由
const routes = [
    {path: '/', component: BaseLayout},
    {path: '/s', component: Index},
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})


// 现在，应用已经启动了！
export default router