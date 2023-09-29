<template>
    <div style="width: 100%;display: flex; justify-content: space-between;flex-wrap: wrap;">
        <el-card shadow="never" style="width: 25%" class="box-card" v-for="i in 8">
            <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
<!--                头像-->
                <el-avatar :size="100" :src="circleUrl" />
<!--                歌手名-->
                <div style="font-weight: bold;font-size: large;margin-top: 15px;">歌手名</div>
                <div style="margin-top: 10px;">吉他谱 2x 份</div>
                <div style="margin-top: 20px;">《代表作》</div>
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
const circleUrl='https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'

</script>

<style scoped>

</style>