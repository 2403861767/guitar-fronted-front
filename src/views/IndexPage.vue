<template>
    <div>
        <!--  el 轮播图     -->
        <div class="banner">
            <el-carousel :interval="4000" type="card" height="264px">
                <el-carousel-item v-for="item in images" :key="item">
                    <img :src="item" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
<!--  私人订制、打印曲谱、制谱师入驻      -->
        <div class="guide" style="margin-top: 2rem;display: flex;justify-content: space-between">
            <div v-for="item in guides" :key="item" class="item">
                <svg-icon :iconClass="item.icon" className="icon" />
                <div class="right">
                    <p class="title">{{item.title}}</p>
                    <p v-if="item.desc!=''" class="desc">{{ item.desc }}</p>
                </div>
            </div>
        </div>
<!--曲谱推荐-->
        <div class="recommend">
            <p class="title">曲谱推荐</p>
            <div class="items">
<!--                TODO -->
                <div >
<!--                    style="display: flex; justify-content: space-between;flex-wrap: wrap;"-->
<!--                    <song-card :song-list="songList"  style="width: 33%;margin-top: 5px;" />-->
                    <song-card :song-list="songList"   />

                </div>
            </div>
        </div>
<!--热门歌手-->
        <div class="hotSinger">
            <p class="title">热门歌手
                <a href="" class="more">更多
                    <el-icon :size="20">
                        <Right />
                    </el-icon>
                </a>
            </p>
            <div class="items">
                <singer-card />
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import {reactive, ref, watchEffect} from "vue";
import SvgIcon from "../components/SvgIcon.vue";
import SongCard from "../components/SongCard.vue";
import myAxios from "../plugins/myAxios.ts";
import SingerCard from "../components/SingerCard.vue";

// 推荐曲谱
const songList = ref([])
const recommendData = async () => {
    let songListData;
    const res =await myAxios.post('/music/recommend')
    songListData = res.data
    songList.value = songListData
}
watchEffect(() => {
    recommendData()
})



const onChange = (current: number) => {
    console.log(current);
};
const images = reactive([
    'https://s.guitarworld.com.cn/upload/default/202306/202306-e668e3fb2478a14e7d106328ebbd2f95.jpg',
    'https://s.guitarworld.com.cn/upload/default/202307/202307-754474ec9af209689e60412b08abd5b4.jpg',
    'https://s.guitarworld.com.cn/upload/default/202303/202303-7ba559f4a4f0e1b2205d583078453b78.jpg',
]);
const guides = reactive([
    {
        icon: 'sirendingzhi',
        title: '私人订制',
        desc:'满足你的个性化曲谱需求'
    },
    {
        icon: 'dayin',
        title: '打印曲谱',
        desc:'在此购买的曲谱' + '\n'+
            '我们都可以为你打印装订成实体书'
    },
    {
        icon: 'User',
        title: '制谱师入驻',
        desc:''
    },
])


</script>

<style scoped>
/*hotSinger*/
.hotSinger .title{
    color: #272727;
    font-size: 28px;
    font-weight: 700;
    margin-top: 88px;
    text-align: center;
    position: relative;
    letter-spacing: 18px;
}
.hotSinger .title .more{
    font-size: 14px;
    color: inherit;
    letter-spacing: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
/* recommend */
.recommend .title{
    color: #272727;
    font-size: 28px;
    font-weight: 700;
    margin-top: 88px;
    text-align: center;
    position: relative;
    letter-spacing: 18px;
}

/*  guide   */
.guide .item{
    width: 32%;
    height: 118px;
    background-color: #f9f9f9;
    border-radius: 10px;
    border: 1px solid #f2f6fc;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #666;
}
.guide .item .icon{
    width: 42px;
    height: 42px;
    color: #52CC72;
}
.guide .item .right {
    margin-left: 24px;
    white-space: pre-wrap;
}
.guide .item .right .title {
    font-size: 16px;
    font-weight: 700;
    color: #333;
}
.guide .item .right .desc {
    margin-top: 16px;
    line-height: 16px;
}





img{
    height: 100%;
    width: 100%;
}
</style>