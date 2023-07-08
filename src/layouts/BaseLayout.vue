<template>
    <div>
        <a-layout>
<!--            头部-->
            <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
                <div class="logo"/>
                <a-menu
                        v-model:selectedKeys="selectedKeys"
                        theme="dark"
                        mode="horizontal"
                        :style="{ lineHeight: '64px' }"
                >
                    <a-menu-item key="1">首页</a-menu-item>
                    <a-menu-item key="2">吉他谱</a-menu-item>
                    <a-menu-item key="3">歌手</a-menu-item>
                </a-menu>
            </a-layout-header>
<!--            内容-->
            <a-layout-content :style="{ padding: '0 50px', marginTop: '64px',marginLeft: '12rem',marginRight: '12rem' }">
<!--                搜索框-->
                <div style="margin-top: 3rem;">
                    <a-input-search
                            v-model:value="value"
                            placeholder="input search text"
                            enter-button
                            @search="onSearch"
                    />
                </div>
                <div :style="{ padding: '24px', minHeight: '100vh', marginTop: '3rem',border:'2px solid' }">
                  <!--content-->
                    <router-view />
                </div>
            </a-layout-content>
<!--            尾部footer-->
            <a-layout-footer :style="{ textAlign: 'center' }">
                枫叶吉他谱分享网 ©2023 Created by 凉风辞叶
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<script>
</script>

<style scoped>
.logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
}
.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}
</style>