<template>
    <div style="width: 100%;display: flex; justify-content: space-between;flex-wrap: wrap;">
        <el-card
            shadow="hover"
            style="width: 33%;margin-top: 5px;cursor: pointer"
            class="box-card"
            v-for="song in props.songList"
        >
            <p class="title" style="font-weight: bold;font-size: 20px;">{{song.musicName}}</p>
            <div style="display: flex;justify-content: space-between;align-items: center">
                <el-tag class="ml-2" type="success">{{ song.typeTag }}</el-tag>
                <div class="detail singe-line">{{ song.singer }}·{{ song.musicDescription }}</div>
                <div style="margin-left: 10px"> | </div>
                <div style="margin-left: 10px">周人气{{ song.popularity }}</div>
                <el-icon :size="20"><VideoPlay /></el-icon>
            </div>
            <div style="display: flex;justify-content: flex-start;align-items: center">
                <div class="user">{{song.producer}} 制谱</div>
                <div style="margin-left: 20px;">{{ song.price }} 吉他币</div>
            </div>
            <el-divider />
            <div class="rate">
                <div class="demo-progress">
                    原版 <el-progress :percentage="song.originalEdition" />
                </div>
                <div class="demo-progress">
                    难度 <el-progress :percentage="song.difficult" >
                    <template #default="{percentage}">
                        <span>{{percentage}}分</span>
                    </template>
                </el-progress>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">

import {VideoPlay} from "@element-plus/icons-vue";
import {SongType} from "../models/song";
interface SongCardListProps {
    songList: SongType[];
}
// @ts-ignore
const props =withDefaults(defineProps<SongCardListProps>(),{
    songList: [] as SongType[]
})


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