<template>
    <div>
        <h1>定位布局 position</h1>
        <div class="ft__view">
            <div class="ft__left">左</div>
            <div class="ft__center">中</div>
            <div class="ft__right">右</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.ft__view {
    width: 1000px;
    height: 600px;
    text-align: center;
    border: 1px solid #000;
    position: relative;

    .ft__left {
        position: absolute;
        left: 0;
        top: 0;
        width: 200px;
        height: 100%;
        background-color: #2196F3;
    }

    .ft__center {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 0 200px;
        background-color: aqua;
    }

    .ft__right {
        position: absolute;
        right: 0;
        top: 0;
        width: 200px;
        height: 100%;
        background-color: #2196F3;
    }
}
</style>