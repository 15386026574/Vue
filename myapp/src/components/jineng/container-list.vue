<template>
    <div class="container-list">
        <div class="search-box">
            <div class="input-icon"></div>
            <input type="text">
        </div>

        <ul class="content-box">
            <li>
                <div class="title">关于本站</div>
                <div>管理员 发布于：2019-05-01 14:05:05</div>
                <div class="item-icon"></div>
            </li>
            <li>
                <div class="title">关于本站</div>
                <div>管理员 发布于：2019-05-01 14:05:05</div>
                <div class="item-icon"></div>
            </li>
            <li>
                <div class="title">关于本站</div>
                <div>管理员 发布于：2019-05-01 14:05:05</div>
                <div class="item-icon"></div>
            </li>
            <li>
                <div class="title">关于本站</div>
                <div>管理员 发布于：2019-05-01 14:05:05</div>
                <div class="item-icon"></div>
            </li>
            <li>
                <div class="title">关于本站</div>
                <div>管理员 发布于：2019-05-01 14:05:05</div>
                <div class="item-icon"></div>
            </li>
            <li>
                <div class="title">关于本站</div>
                <div>管理员 发布于：2019-05-01 14:05:05</div>
                <div class="item-icon"></div>
            </li>
            <li>
                <div class="title">关于本站</div>
                <div>管理员 发布于：2019-05-01 14:05:05</div>
                <div class="item-icon"></div>
            </li>
            <li>
                <div class="title">关于本站</div>
                <div>管理员 发布于：2019-05-01 14:05:05</div>
                <div class="item-icon"></div>
            </li>
            <li>
                <div class="title">关于本站</div>
                <div>管理员 发布于：2019-05-01 14:05:05</div>
                <div class="item-icon"></div>
            </li>
            <li>
                <div class="title">关于本站</div>
                <div>管理员 发布于：2019-05-01 14:05:05</div>
                <div class="item-icon"></div>
            </li>
            <li>
                <div class="title">关于本站111111111</div>
                <div>管理员 发布于：2019-05-01 14:05:05</div>
                <div class="item-icon"></div>
            </li>
        </ul>
    </div>
</template>

<style scoped>

.container-list .search-box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background: #aaaaaa;
}

.container-list .search-box .input-icon {
    position: absolute;
    top: 50%;
    left: 20px;
    width: 25px;
    height: 25px;
    margin-top: -12.5px;
    background: #ddd;
    border-radius: 50%;
    background-image: url('./images/icons-36-white.png');
    background-position: -1225px -5px;
}

.container-list .search-box input {
    box-sizing: border-box;
    width: 95%;
    height: 35px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    outline: none;
    border: 2px solid #333333;
    padding-left: 40px;
}

.container-list .content-box {
    width: 100%;
    flex: 1;
    overflow: auto;
}

.container-list .content-box li {
    position: relative;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #ddd;
    padding: 0 20px;
    box-sizing: border-box;
}

.container-list .content-box li .item-icon {
    position: absolute;
    top: 50%;
    right: 20px;
    width: 25px;
    height: 25px;
    margin-top: -12.5px;
    background: #aaaaaa;
    border-radius: 50%;
    background-image: url('./images/icons-36-white.png');
    background-position: -220px -5px;
}

.container-list .content-box li .title {
    font-weight: bold;
    height: 40px;
    line-height: 40px;
}

</style>
