<template>
    <div style="width: 100%;">
        <el-card class="box-card">
            <p class="title" style="font-weight: bold;font-size: 20px;">凄美弟</p>
            <div style="display: flex;justify-content: space-between;align-items: center">
                <el-tag class="ml-2" type="success">弹唱吉他谱</el-tag>
                <div class="detail singe-line">郭顶·凄美地xxxxxxxxxx</div>
                <div style="margin-left: 10px"> | </div>
                <div style="margin-left: 10px">周人气99+</div>
                <el-icon :size="20"><VideoPlay /></el-icon>
            </div>
            <div style="display: flex;justify-content: flex-start;align-items: center">
                <div class="user">凉风辞叶 制谱</div>
                <div style="margin-left: 20px;">5 吉他币</div>
            </div>
            <el-divider />
            <div class="rate">
                <div class="demo-progress">
                    原版 <el-progress :percentage="50" />
                </div>
                <div class="demo-progress">
                    难度 <el-progress :percentage="50" >
                    <template #default="{percentage}">
                        <span>{{percentage}}分</span>
                    </template>
                </el-progress>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup>

import {VideoPlay} from "@element-plus/icons-vue";
</script>

<style scoped>
.demo-progress .el-progress--line {
    margin-bottom: 15px;
    width: 150px;
}
.rate{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.singe-line {
    margin-left: 10px;
    width: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
}
</style>