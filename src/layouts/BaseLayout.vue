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
                    <a-menu-item key="1">nav 1</a-menu-item>
                    <a-menu-item key="2">nav 2</a-menu-item>
                    <a-menu-item key="3">nav 3</a-menu-item>
                </a-menu>
            </a-layout-header>
<!--            内容-->
            <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
                <div :style="{ background: '#fff', padding: '24px', minHeight: '380px', marginTop: '5rem' }">Content</div>
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