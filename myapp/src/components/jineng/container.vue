<template>
    <div class="container">
        <div class="page-title">文章管理</div>

        <ul class="page-tab">
            <li
                v-for="(item, index) in tabList"
                :key="index"
                @click="tabClick(index)"
                :class="{active: currentTab === index}">
                {{item}}
            </li>
        </ul>

        <router-view></router-view>

        <ul class="footer">
            <li>
                <div class="icon"></div>
                <div>文章管理</div>
            </li>
            <li>
                <div class="icon"></div>
                <div>文章管理</div>
            </li>
            <li>
                <div class="icon"></div>
                <div>文章管理</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tabList: ['文章列表', '文章编写', '文章分类'],
            currentTab: 0
        }
    },
    methods: {
        tabClick (index) {
            this.currentTab = index
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.container-list {
    flex: 1;
    margin-top: 80px;
    margin-bottom: 60px;
}

.container .page-title {
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(100, 108, 252);
    color: #ffffff;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    z-index: 1;
}

.container .page-tab {
    position: fixed;
    top: 40px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    border-bottom: 1px solid blue;
    z-index: 1;
}

.container .page-tab li {
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
}

.container .page-tab li.active {
    background: #aaa;
    color: #ffff;
    font-weight: bold;
}

.container .page-tab li:nth-child(2) {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
}

.container .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 60px;
    background: rgb(100, 108, 252);
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
}

.container .footer li {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.container .footer li .icon {
    width: 25px;
    height: 25px;
    background: #aaaaaa;
    border-radius: 50%;
}

.container .footer li:first-child .icon {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-image: url('./images/icons-36-white.png');
    background-position: -867px -5px;
}

.container .footer li:nth-child(2) .icon {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-image: url('./images/icons-36-white.png');
    background-position: -939px -5px;
}

.container .footer li:last-child .icon {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-image: url('./images/icons-36-white.png');
    background-position: -580.5px -5px;
}
</style>
